import express from "express";
import neo4j from "neo4j-driver";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


// Connect to Neo4j
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const session = driver.session();

// Sample API route to test connection
app.get("/users", async (req, res) => {
  try {
    const result = await session.run("MATCH (u:User) RETURN u LIMIT 10");
    const users = result.records.map(record => record.get("u").properties);
    res.json(users);
  } catch (error) {
    console.error("Neo4j Query Error:", error);
    res.status(500).json({ error: "Database query failed" });
  }
});

// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com"}'

//create a user node
app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    try {
      await session.run("CREATE (u:User {name: $name, email: $email}) RETURN u", { name, email });
      res.status(201).json({ message: "User created" });
    } catch (error) {
      console.error("Neo4j Create Error:", error);
      res.status(500).json({ error: "Database write failed" });
    }
  });

  // ✅ **1. Get All Restaurants**
app.get("/restaurants", async (req, res) => {
    try {
      const result = await session.run("MATCH (r:Restaurant) RETURN r");
      const restaurants = result.records.map(record => record.get("r").properties);
      res.json(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      res.status(500).json({ error: "Database query failed" });
    }
  });
  
  // ✅ **2. Get Restaurant Recommendations for a User**
  app.get("/recommendations/:userId", async (req, res) => {
    const { userId } = req.params;
    
    try {
      const result = await session.run(
        `MATCH (u:User {id: $userId})-[:RATED]->(r:Restaurant)
        WITH u, r
        MATCH (other:User)-[:RATED]->(r)
        WHERE other <> u
        MATCH (other)-[:RATED]->(rec:Restaurant)
        WHERE NOT (u)-[:RATED]->(rec)  
        RETURN rec, COUNT(*) AS score
        ORDER BY score DESC
        LIMIT 5
        `,
        { userId }
      );
  
      const recommendations = result.records.map(record => record.get("rec").properties);
      res.json(recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      res.status(500).json({ error: "Database query failed" });
    }
  });
  
  // ✅ **3. Get Restaurants in a Specific City**
  app.get("/restaurants/city/:city", async (req, res) => {
    const { city } = req.params;
    
    try {
      const result = await session.run(
        "MATCH (r:Restaurant) WHERE r.city = $city RETURN r",
        { city }
      );
      const restaurants = result.records.map(record => record.get("r").properties);
      res.json(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      res.status(500).json({ error: "Database query failed" });
    }
  });
  
  // ✅ **4. Rate a Restaurant**
  app.post("/rate", async (req, res) => {
    const { userId, restaurantId, stars } = req.body;
  
    try {
      await session.run(
        `
        MATCH (u:User {id: $userId}), (r:Restaurant {id: $restaurantId})
        MERGE (u)-[rating:RATED]->(r)
        SET rating.stars = $stars
        RETURN r
        `,
        { userId, restaurantId, stars }
      );
  
      res.json({ message: "Rating added successfully!" });
    } catch (error) {
      console.error("Error adding rating:", error);
      res.status(500).json({ error: "Failed to add rating" });
    }
  });

  // Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

  

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
    await session.close();
    await driver.close();
    console.log("Neo4j connection closed");
    process.exit(0);
  });
  
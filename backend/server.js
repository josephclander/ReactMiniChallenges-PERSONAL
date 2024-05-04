const express = require("express");
const sequelize = require("./models/index");
const Challenge = require("./models/Challenge");

const app = express();
app.use(express.json());

sequelize
  .sync()
  .then(() => console.log("Drop and re-sync db."))
  .catch((error) => console.error("Error syncing database:", error));

const PORT = process.env.PORT || 3001;

// get challenge
app.get("/challenge/:id", async (req, res) => {
  const challengeId = parseInt(req.params.id);
  const challenge = await Challenge.findByPk(challengeId);
  res.send(challenge);
});

// update challenge attempts by one
app.put("/challenge/:id/increment", async (req, res) => {
  const challengeId = parseInt(req.params.id);
  const response = await Challenge.increment(
    { attempts: 1 },
    {
      where: {
        id: challengeId,
      },
    }
  );
  const challenge = response[0][0][0];
  res.send(challenge);
});

// decrease challenge attempts by one
app.put("/challenge/:id/decrement", async (req, res) => {
  const challengeId = parseInt(req.params.id);
  const response = await Challenge.decrement(
    { attempts: 1 },
    {
      where: {
        id: challengeId,
      },
    }
  );
  const challenge = response[0][0][0];
  res.send(challenge);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const { exec } = require("child_process");
const app = express();

app.get("/", (req, res) => {
  res.send("FFmpeg Render Service is running ✅");
});

app.get("/ffmpeg", (req, res) => {
  const cmd = 'ffmpeg -version';
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      res.send(`Error: ${stderr}`);
    } else {
      res.send(`FFmpeg Output:\n${stdout}`);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

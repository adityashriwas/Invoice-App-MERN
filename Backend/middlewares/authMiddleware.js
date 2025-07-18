import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.id;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};

//this server is used for testing it will be replaced by server-old
import express from 'express'; 
const server = express(); 
server.use(express.json()); 
export default server
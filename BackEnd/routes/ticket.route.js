const ticketCtrl= require("./../controllers/ticket.controller");

const express = require("express");
const router = express.Router();

router.get('/',ticketCtrl.getTickets);
router.post('/',ticketCtrl.createTicket);
router.delete('/',ticketCtrl.deleteTicket);
router.put('/',ticketCtrl.editTicket);

module.exports = router;
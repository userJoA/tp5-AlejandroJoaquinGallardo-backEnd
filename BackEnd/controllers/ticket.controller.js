const Ticket= require("../models/ticket");
const ticketCtrl={};

ticketCtrl.createTicket= async (req, res) => {
    var { precioTicket, categoriaEspectador } = req.body;
    try {
      if (categoriaEspectador == "l" || categoriaEspectador == "l" ){
          precioTicket = precioTicket - ( precioTicket * 20 / 100 );
        }
      var ticket = new Ticket({ ...req.body, precioTicket });
      await ticket.save();
      res.json({
        status: "1",
        msg: "ticket guardado.",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando operacion.",
      });
    }
  };
  
  ticketCtrl.getTickets= async (req, res) => {
    let criteria={};
   
    if((req.query.categoriaEspectador!=null && req.query.categoriaEspectador!="")){
      criteria.categoriaEspectador= req.query.categoriaEspectador;
    }
    var tickets = await Ticket.find(criteria).populate("espectador");
    res.json(tickets);
  };

  ticketCtrl.getTicket= async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    res.json(ticket);
  };


  ticketCtrl.deleteTicket = async (req, res) => {
    try {
      await Ticket.deleteOne({ _id: req.params.id });
      res.json({
        status: "1",
        msg: "Ticktet removed",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando la operacion",
      });
    }
  };

  
ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
      await Ticket.updateOne({ _id: req.body._id }, vticket);
      res.json({
        status: "1",
        msg: "Ticket updated",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando la operacion",
      });
    }
  };

  module.exports=ticketCtrl;
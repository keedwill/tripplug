const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/tours", (req, res) => {
  res.render("tours");
});

router.get("/dubai", (req, res) => {
  res.render("dubai");
});

router.get("/maldives", (req, res) => {
  res.render("maldives");
});


router.get("/nairobi", (req, res) => {
  res.render("nairobi");
});


router.get("/transport", (req, res) => {
  res.render("transport");
});

router.get("/covid-test", (req, res) => {
    res.render("covid-test");
  });
  

  router.get("/management", (req, res) => {
    res.render("management");
  });
  
  router.get("/privacy", (req, res) => {
    res.render("privacy");
  });
  
  router.get("/airlinestock", (req, res) => {
    res.render("airlinestock");
  });
  router.get("/cancellation", (req, res) => {
    res.render("cancellation");
  });
  
  router.get("/feedback", (req, res) => {
    res.render("feedback");
  });
  
 router.post('/feedback',(req,res)=>{
  const { category, email, fullname, message,phone } = req.body;
   console.log(req.body)
   const data = {
    from: "princewillowoh18@gmail.com",
    to: email,
    subject: "Customer Feedback",
    html: `
    
    <ul>
    <li>Category : ${category}</li>
    <li> Fullname : ${fullname}</li>
    <li> Phone : ${phone}</li>
    <li>Feedback : ${message}</li>
  </ul> 
    `,
  };
  
   let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "princewillowoh18@gmail.com",
      pass: "FRehky5214",
    },
  });
  
  transporter.sendMail(data, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      req.flash(
        "success_msg",
        "Your Feedback has been sent."
      );
      res.redirect("/");
      console.log("Email sent: " + info.response);
    }
  });
  
 })
 
 
  router.get("/about", (req, res) => {
    res.render("about");
  });
  
  router.get("/t&c", (req, res) => {
    res.render("t&c");
  });

  router.get("/protocol", (req, res) => {
    res.render("protocol");
  });
  
  

router.get("/lounge", (req, res) => {
  res.render("lounge");
});

router.get("/travel-insurance", (req, res) => {
    res.render("travelinsurance");
  });
  

router.get('/signup',(req,res)=>{
    res.render("signup");
})

// router.get("/dashboard", ensureAuth, async (req, res) => {
//   try {
//     let user = req.user
//     let date = moment()
//     const stories = await Story.find({ user: req.user.id }).sort({createdAt:'desc'}).lean();

//     res.render("dashboard", { user: {
//       name:user.firstName,
//       image: user.image
//     }, stories:stories });
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = router;

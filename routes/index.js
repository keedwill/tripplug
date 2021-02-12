const express = require("express");
const router = express.Router();

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
  
  // router.get("/logistics", (req, res) => {
  //   res.render("logistics");
  // });
  
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

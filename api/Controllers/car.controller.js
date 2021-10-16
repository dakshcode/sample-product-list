
const { response } = require("express");
//const User = require("../Models/user");


// const userRegister = (req, res, next) => {
// 	User.find({ email: req.body.email })
// 		.exec()
// 		.then((user) => {
// 			if (user.length >= 1) {
//         res.status(409).json({
//           message:"Email Exists"
//         })
// 			} else {
// 				bcrypt.hash(req.body.password, 10, (err, hash) => {
// 					if (err) {
// 						return res.status(500).json({
// 							error: err,
// 						});
// 					} else {
// 						const user = new User({
// 							_id: new mongoose.Types.ObjectId(),
// 							email: req.body.email,
// 							password: hash,
//               name: req.body.name,
//               phone_number: req.body.phone_number
// 						});
// 						user
// 							.save()
// 							.then(async (result) => {
// 								await result
// 									.save()
// 									.then((result1) => {
//                       console.log(`User created ${result}`)
//                       res.status(201).json({
//                         userDetails: {
//                           userId: result._id,
//                           email: result.email,
//                           name: result.name,
//                           phone_number: result.phone_number,
//                         },
//                       })
// 									})
// 									.catch((err) => {
//                     console.log(err)
//                     res.status(400).json({
//                       message: err.toString()
//                     })
// 									});
// 							})
// 							.catch((err) => {
//                 console.log(err)
//                 res.status(500).json({
//                   message: err.toString()
//                 })
// 							});
// 					}
// 				});
// 			}
// 		})
// 		.catch((err) => {
//       console.log(err)
//       res.status(500).json({
//         message: err.toString()
//       })
//     });
// }


const index = async (req, res) => {
	//const carId = req.carId;
	// const car = await Car.findById();
	// if (car) {
	// 	res.status(200).json({
	// 		message: "Found",
	// 		user,
	// 	});
	// } else {
	// 	res.status(400).json({
	// 		message: "Bad request",
	// 	});
	// }
	res.status(200).json([{
        'name': 'BMW Sedan',
        'price': '49.78',
        'unit': 'Lakhs',
        'image': 'pexels-mike-244206.jpg'
       },
       {
        'name': 'Black Toyata',
        'price': '39.78',
        'unit': 'Lakhs',
        'image': 'pexels-kelson-downes-1149137.jpg'
       },
       {
        'name': 'Land Rover',
        'price': '38.78',
        'unit': 'Lakhs',
        'image': 'pexels-mike-116675.jpg'
       },
       {
        'name': 'Baleno',
        'price': '9.78',
        'unit': 'Lakhs',
        'image': 'pexels-kelson-downes-1149137.jpg'
       },
       {
        'name': 'Ford Focus',
        'price': '9.78',
        'unit': 'Lakhs',
        'image': 'pexels-mike-1007410.jpg'
       },
       {
        'name': 'Mercedes Benz',
        'price': '9.78',
        'unit': 'Lakhs',
        'image': 'pexels-mike-1335077.jpg'
       },
       {
        'name': 'Audi',
        'price': '9.78',
        'unit': 'Lakhs',
        'image': 'pexels-mike-1335077.jpg'
       },
       {
       'name': 'Land Rover',
       'price': '9.78',
       'unit': 'Lakhs',
       'image': 'pexels-mike-116675.jpg'
      }
       ])
};

module.exports = {
	index,
};

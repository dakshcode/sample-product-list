
const { response } = require("express");
//const User = require("../Models/user");

let  data = [{
        'name': 'BMW Sedan',
        'price': '49.78',
        'unit': 'Lakhs',
        'image': 'pexels-mike-244206.jpg',
        'sku': [
           {
              "dealer": "true-motors",
              "price": "51",
              "unit": "Lakhs"
           },
           {
              "dealer": "aone-motors",
              "price": "53",
              "unit": "Lakhs"
           },
           {
                "dealer": "classic-motors",
                "price": "51.50",
                "unit": "Lakhs"
           }
        ]
       },
       {
        'name': 'Black Toyata',
        'price': '39.78',
        'unit': 'Lakhs',
        'image': 'pexels-kelson-downes-1149137.jpg',
        'sku': [
                {
                   "dealer": "true-motors",
                   "price": "40",
                   "unit": "Lakhs"
                },
                {
                   "dealer": "aone-motors",
                   "price": "43",
                   "unit": "Lakhs"
                },
                {
                     "dealer": "classic-motors",
                     "price": "43.50",
                     "unit": "Lakhs"
                }
             ]
       },
       {
        'name': 'Land Rover',
        'price': '38.78',
        'unit': 'Lakhs',
        'image': 'pexels-mike-116675.jpg',
        'sku': [
                {
                   "dealer": "true-motors",
                   "price": "40",
                   "unit": "Lakhs"
                },
                {
                   "dealer": "aone-motors",
                   "price": "43",
                   "unit": "Lakhs"
                },
                {
                     "dealer": "classic-motors",
                     "price": "43.50",
                     "unit": "Lakhs"
                }
             ]
       },
       {
        'name': 'Baleno',
        'price': '39.78',
        'unit': 'Lakhs',
        'image': 'pexels-kelson-downes-1149137.jpg',
        'sku': [
                {
                   "dealer": "true-motors",
                   "price": "40",
                   "unit": "Lakhs"
                },
                {
                   "dealer": "aone-motors",
                   "price": "43",
                   "unit": "Lakhs"
                },
                {
                     "dealer": "classic-motors",
                     "price": "43.50",
                     "unit": "Lakhs"
                }
             ]
       },
       {
        'name': 'Ford Focus',
        'price': '39.00',
        'unit': 'Lakhs',
        'image': 'pexels-mike-1007410.jpg',
        'sku': [
                {
                   "dealer": "true-motors",
                   "price": "40",
                   "unit": "Lakhs"
                },
                {
                   "dealer": "aone-motors",
                   "price": "43",
                   "unit": "Lakhs"
                },
                {
                     "dealer": "classic-motors",
                     "price": "43.50",
                     "unit": "Lakhs"
                }
             ]
       },
       {
        'name': 'Mercedes Benz',
        'price': '40.00',
        'unit': 'Lakhs',
        'image': 'pexels-mike-1335077.jpg',
        'sku': [
                {
                   "dealer": "true-motors",
                   "price": "40",
                   "unit": "Lakhs"
                },
                {
                   "dealer": "aone-motors",
                   "price": "43",
                   "unit": "Lakhs"
                },
                {
                     "dealer": "classic-motors",
                     "price": "43.50",
                     "unit": "Lakhs"
                }
             ]
       },
       {
        'name': 'Audi',
        'price': '39.00',
        'unit': 'Lakhs',
        'image': 'pexels-mike-1335077.jpg',
        'sku': [
                {
                   "dealer": "true-motors",
                   "price": "40",
                   "unit": "Lakhs"
                },
                {
                   "dealer": "aone-motors",
                   "price": "43",
                   "unit": "Lakhs"
                },
                {
                     "dealer": "classic-motors",
                     "price": "43.50",
                     "unit": "Lakhs"
                }
             ]
       },
       {
       'name': 'Land Rover',
       'price': '59.78',
       'unit': 'Lakhs',
       'image': 'pexels-mike-116675.jpg',
       'sku': [
        {
           "dealer": "true-motors",
           "price": "61.50",
           "unit": "Lakhs"
        },
        {
           "dealer": "aone-motors",
           "price": "65",
           "unit": "Lakhs"
        },
        {
             "dealer": "classic-motors",
             "price": "66.50",
             "unit": "Lakhs"
        }
     ]
      }
       ];


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
	res.status(200).json(data);
};

const dealer = async (req, res) => {
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
	// }'
        
        dealerData = [...data].map((obj) => {
               obj.price = obj.sku.find((v) => (req.params.id == v.dealer)).price;
               return obj;
        },[req]);
	res.status(200).json(dealerData);
};

module.exports = {
	index,
        dealer
};

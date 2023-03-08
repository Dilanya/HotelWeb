const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");


const bookSchema = new mongoose.Schema({
    
    adults: { type: String,  },
	children: { type: String,  },
	rooms: { type: String,  },
	roomtype: { type: String,  },
    checkin: {type:Date,},
    checkout: {type:Date,}
});

bookSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const Book = mongoose.model("book", bookSchema);

const validate = (data) => {
	const schema = Joi.object({
		adults: Joi.string().label("Adults"),
		children: Joi.string().required().label("Children"),
		rooms: Joi.string().required().label("Rooms"),
		roomtype: Joi.string().required().label("Room Type"),
        checkin: Joi.date().required().label("CheckIn"),
        checkin: Joi.date().required().label("CheckIn")
	});
	return schema.validate(data);
};

module.exports = { Book, validate };
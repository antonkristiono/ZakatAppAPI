// @desc    Get All Bootcamps
// @route   GET /api/v1/bootcamps
// @acces   Public
exports.getBootcamps = ( req, res, next ) => {
    res.status(200).json({success:true, msg: "Show all bootcamps" });
}


// @desc    Get Single Bootcamps
// @route   GET /api/v1/bootcamps/:id
// @acces   Public
exports.getBootcamp = ( req, res, next ) => {
    res.status(200).json({success:true, msg:  `Get bootcamp ${req.params.id}` });
}

// @desc    Create new Bootcamps
// @route   POST /api/v1/bootcamps
// @acces   Private
exports.createBootcamp = ( req, res, next ) => {
    res.status(200).json({success:true, msg: "Create new bootcamp" });
}


// @desc    Update Bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @acces   Private
exports.updateBootcamp = ( req, res, next ) => {
    res.status(200).json({success:true, msg: `Update bootcamp ${req.params.id}`});
}


// @desc    Delete Bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @acces   Private
exports.deleteBootcamp = ( req, res, next ) => {
    res.status(200).json({success:true, msg: `Delete bootcamp ${req.params.id}` });
}

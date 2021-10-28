const { response } = require("express");
images = [];





const postImages = (req, res = response) => {
    const image = req.body;
    console.log(image.id);
    const newImage = images.filter((item) => {
        return item.id === image.id;
    });

    console.log(newImage);

    if (newImage.length !== 0) {
        res.status(400)
            .json({ ok: false, msg: "No puede crear al usuario", method: "post" });
    } else {
        images.push(newImage);
        res.status(200)
            .json({ ok: true, msg: "Imagen agregada correctamente", method: "post" });
    }

    // res.status(200)
    //     .json({ ok: true, msg: "prueba de fuego n1 usando router", transmision: "mensaje enviado desde el controlador de usuarios", method: "post" });
};

const putImages = (req, res = response) => {
    const imageId = req.params.id;
    console.log("parametro: ", imageId);
    const updateImage = images.findIndex((item) => {
        return item.id == imageId;
    });
    console.log("Imagen: ", updateImage);

    if (updateImage == -1) {
        res.status(400)
            .json({
                ok: false,
                msg: "No se encontro la imagen",
                method: "put",
            });
    } else {
        images[updateImage] = req.body;
        res
            .status(200)
            .json({
                ok: true,
                msg: "Imagen Actualizada",
                method: "put",
            });
    }

};



module.exports = {
    postImages,
    putImages

};
const express = require('express');
const mongoose = require('mongoose');
const body = require('body-parser');

const Tache = require('./models');
 
let app = express();

app.use(body());

mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', function(req, res) { // création de la route sous le verbe get
    console.log(req, res);
    res.send('Hello world  ! ') // envoi de hello world a l'utilisateur
})

// Enregistrement d'une tache
app.post('/tasks', async (req, res) => {
    const titre = req.body.titre; // récupération des variables du body

    if (!titre) { // on vérifie que la variable titre
        res.send('Le titre et requis!!!');
        return
    }

    const nouvelle_tache = new Tache({ // création d'un objet représentant une nouvelle tache
        titre : titre,
        statuts : 0
    });
        
    await nouvelle_tache.save(); // sauvegarde asynchrone de la nouvelle tache
    res.json(nouvelle_tache);
    return
})

// Liste des taches
app.get('/tasks', async (req, res) => {
    try {
        const taches = await Tache.find(); // On récupère toute les taches
        await res.json(taches);
    } catch (error) {
        console.log(error);
    }
})

// recupere une tache
app.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const tache = await Tache.findOne({_id : id});

})

// Supprime une tache
app.delete('/tasks/:id', async(req, res) => {
    const id = req.params.id;
    const suppr = await Tache.deleteOne({_id : id});
    res.json(suppr);
})
 
 
app.listen(8080)
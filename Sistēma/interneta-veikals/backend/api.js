import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'vHCMkV0@wb5c',
  database: 'veikalsdb',
});

app.listen(5001, () => {
  console.log('Connected to backend.');
});

/*ADMINISTRĀCIJA*/

app.get('/administracija', (req, res) => {
  const query = 'SELECT * FROM administracija';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/administracija', (req, res) => {
  const query = 'INSERT INTO administracija(`lietotajvards`, `parole`) VALUES (?)';

  const values = [req.body.lietotajvards, req.body.parole];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/administracija/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM administracija WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/administracija/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE administracija SET `lietotajvards`= ?, `parole`= ? WHERE id = ?';

  const values = [req.body.lietotajvards, req.body.parole];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

/*ADMINISTRĀCIJA BEIGAS*/

/*GROZS*/

app.get('/grozs', (req, res) => {
  const query = 'SELECT * FROM grozs';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/grozs', (req, res) => {
  const query = 'INSERT INTO grozs(`Lietotaji_id`) VALUES (?)';

  const values = [req.body.Lietotaji_id];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/grozs/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM grozs WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/grozs/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE grozs SET `Lietotaji_id`= ? WHERE id = ?';

  const values = [req.body.Lietotaji_id];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

/*GROZS BEIGAS*/

/*GROZA_PRODUKTS*/

app.get('/groza_produkts', (req, res) => {
  const query = 'SELECT * FROM groza_produkts';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/groza_produkts', (req, res) => {
  const query = 'INSERT INTO groza_produkts(`lietotajvards`, `parole`) VALUES (?)';

  const values = [req.body.daudzums, req.body.Grozs_id, req.body.Produkta_info_id];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/groza_produkts/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM groza_produkts WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/groza_produkts/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE groza_produkts SET `daudzums`= ?, `Grozs_id` = ?, `Produkta_info_id` = ? WHERE id = ?';

  const values = [req.body.daudzums, req.body.Grozs_id, req.body.Produkta_info_id];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

/*GROZA_PRODUKTS BEIGAS*/

/*informacija*/

app.get('/informacija', (req, res) => {
  const query = 'SELECT * FROM informacija';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/informacija', (req, res) => {
  const query = 'INSERT INTO informacija(`adrese`, `pilseta`, `zip_kods`, `vards`, `uzvards`) VALUES (?)';

  const values = [req.body.adrese, req.body.pilseta, req.body.zip_kods, req.body.vards, req.body.uzvards];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/informacija/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM informacija WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/informacija/:id', (req, res) => {
  const id = req.params.id;
  const query =
    'UPDATE informacija SET `adrese`= ?, `pilseta` = ?, `zip_kods` = ?, `vards` = ?, `uzvards` = ? WHERE id = ?';

  const values = [req.body.adrese, req.body.pilseta, req.body.zip_kods, req.body.vards, req.body.uzvards];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

/*informacija BEIGAS*/

/*`kategorijas`*/
app.get('/kategorijas', (req, res) => {
  const query = 'SELECT * FROM kategorijas';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/kategorijas', (req, res) => {
  const query = 'INSERT INTO kategorijas(`nosaukums`) VALUES (?)';

  const values = [req.body.nosaukums];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/kategorijas/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM kategorijas WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/kategorijas/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE kategorijas SET `nosaukums`= ? WHERE id = ?';

  const values = [req.body.nosaukums];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`kategorijas` BEIGAS*/

/*`lietotaja_informacija`*/
app.get('/lietotaja_informacija', (req, res) => {
  const query = 'SELECT * FROM lietotaja_informacija';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/lietotaja_informacija', (req, res) => {
  const query = 'INSERT INTO lietotaja_informacija(`Lietotaji_id`,`informacija_id`) VALUES (?)';

  const values = [req.body.Lietotaji_id, req.body.informacija_id];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/lietotaja_informacija/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM lietotaja_informacija WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/lietotaja_informacija/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE lietotaja_informacija SET `Lietotaji_id`= ?, `informacija_id`= ? WHERE id = ?';

  const values = [req.body.Lietotaji_id, req.body.informacija_id];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`lietotaja_informacija` BEIGAS*/

/*`lietotaji`*/
app.get('/lietotaji', (req, res) => {
  const query = 'SELECT * FROM lietotaji';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/lietotaji', (req, res) => {
  const query = 'INSERT INTO lietotaji(`lietotajvards`,`parole`,`epasta_adrese`,`talr_nr`) VALUES (?)';

  const values = [req.body.lietotajvards, req.body.parole, req.body.epasta_adrese, req.body.talr_nr];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/lietotaji/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM lietotaji WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/lietotaji/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE lietotaji SET `lietotajvards`= ?, `parole`= ?, `epasta_adrese`= ?, `talr_nr`= ? WHERE id = ?';

  const values = [req.body.lietotajvards, req.body.parole, req.body.epasta_adrese, req.body.talr_nr];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`lietotaji` BEIGAS*/

/*`pasutijuma_pakalpojums`*/
app.get('/pasutijuma_pakalpojums', (req, res) => {
  const query = 'SELECT * FROM pasutijuma_pakalpojums';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/pasutijuma_pakalpojums', (req, res) => {
  const query = 'INSERT INTO pasutijuma_pakalpojums(`Pakalpojuma_sniedzejs`,`Cena`) VALUES (?)';

  const values = [req.body.Pakalpojuma_sniedzejs, req.body.Cena];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/pasutijuma_pakalpojums/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM pasutijuma_pakalpojums WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/pasutijuma_pakalpojums/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE pasutijuma_pakalpojums SET `Pakalpojuma_sniedzejs`= ?, `Cena`= ? WHERE id = ?';

  const values = [req.body.Pakalpojuma_sniedzejs, req.body.Cena];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`pasutijuma_pakalpojums` BEIGAS*/

/*`pasutijuma_status`*/
app.get('/pasutijuma_status', (req, res) => {
  const query = 'SELECT * FROM pasutijuma_status';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/pasutijuma_status', (req, res) => {
  const query = 'INSERT INTO pasutijuma_status(`status`) VALUES (?)';

  const values = [req.body.status];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/pasutijuma_status/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM pasutijuma_status WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/pasutijuma_status/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE pasutijuma_status SET `status`= ? WHERE id = ?';

  const values = [req.body.status];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`pasutijuma_status` BEIGAS*/

/*`pasutijumi`*/
app.get('/pasutijumi', (req, res) => {
  const query = 'SELECT * FROM pasutijumi';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/pasutijumi', (req, res) => {
  const query =
    'INSERT INTO pasutijumi(`kopsumma`,`pasutijuma_datums`,`Lietotaji_id`,`Pasutijuma_pakalpojums_id`,`Pasutijuma_status_id`,`informacija_id`) VALUES (?)';

  const values = [
    req.body.kopsumma,
    req.body.pasutijuma_datums,
    req.body.Lietotaji_id,
    req.body.Pasutijuma_pakalpojums_id,
    req.body.Pasutijuma_status_id,
    req.body.informacija_id,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/pasutijumi/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM pasutijumi WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/pasutijumi/:id', (req, res) => {
  const id = req.params.id;
  const query =
    'UPDATE pasutijumi SET `kopsumma`= ?, `pasutijuma_datums`= ?, `Lietotaji_id`= ?, `Pasutijuma_pakalpojums_id`= ? ,`Pasutijuma_status_id`= ? ,`informacija_id`= ? WHERE id = ?';

  const values = [
    req.body.kopsumma,
    req.body.pasutijuma_datums,
    req.body.Lietotaji_id,
    req.body.Pasutijuma_pakalpojums_id,
    req.body.Pasutijuma_status_id,
    req.body.informacija_id,
  ];
  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`pasutijumi` BEIGAS*/

/*`produkta_info`*/
app.get('/produkta_info', (req, res) => {
  const query = 'SELECT * FROM produkta_info';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/produkta_info', (req, res) => {
  const query = 'INSERT INTO produkta_info(`Produkti_id`,`daudzums_noliktava`,`cena`,`attels`) VALUES (?)';

  const values = [req.body.Produkti_id, req.body.daudzums_noliktava, req.body.cena, req.body.attels];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/produkta_info/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM produkta_info WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/produkta_info/:id', (req, res) => {
  const id = req.params.id;
  const query =
    'UPDATE produkta_info SET `Produkti_id`= ?, `daudzums_noliktava`= ?, `cena`= ?, `attels`= ? WHERE id = ?';

  const values = [req.body.Produkti_id, req.body.daudzums_noliktava, req.body.cena, req.body.attels];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`produkta_info` BEIGAS*/

/*`produkta_info_has_variacijas_dati`*/
app.get('/produkta_info_has_variacijas_dati', (req, res) => {
  const query = 'SELECT * FROM produkta_info_has_variacijas_dati';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/produkta_info_has_variacijas_dati', (req, res) => {
  const query = 'INSERT INTO produkta_info_has_variacijas_dati(`Produkta_info_id`,`Variacijas_dati_id`) VALUES (?)';

  const values = [req.body.Produkta_info_id, req.body.Variacijas_dati_id];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/produkta_info_has_variacijas_dati/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM produkta_info_has_variacijas_dati WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/produkta_info_has_variacijas_dati/:id', (req, res) => {
  const id = req.params.id;
  const query =
    'UPDATE produkta_info_has_variacijas_dati SET `Produkta_info_id`= ?, `Variacijas_dati_id`= ? WHERE id = ?';

  const values = [req.body.Produkta_info_id, req.body.Variacijas_dati_id];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`produkta_info_has_variacijas_dati` BEIGAS*/

/*`produkti` */
app.get('/produkta_info_has_variacijas_dati', (req, res) => {
  const query = 'SELECT * FROM produkta_info_has_variacijas_dati';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/produkta_info_has_variacijas_dati', (req, res) => {
  const query =
    'INSERT INTO produkta_info_has_variacijas_dati(`nosaukums`,`apraksts`,`attels`,`Kategorijas_id`) VALUES (?)';

  const values = [req.body.nosaukums, req.body.apraksts, req.body.attels, req.body.Kategorijas_id];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/produkta_info_has_variacijas_dati/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM produkta_info_has_variacijas_dati WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/produkta_info_has_variacijas_dati/:id', (req, res) => {
  const id = req.params.id;
  const query =
    'UPDATE produkta_info_has_variacijas_dati SET `nosaukums`= ?, `apraksts`= ?, `attels`= ?, `Kategorijas_id`= ? WHERE id = ?';

  const values = [req.body.nosaukums, req.body.apraksts, req.body.attels, req.body.Kategorijas_id];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`produkti` BEIGAS*/

/*`variacijas`*/
app.get('/variacijas', (req, res) => {
  const query = 'SELECT * FROM variacijas';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/variacijas', (req, res) => {
  const query = 'INSERT INTO variacijas(`nosaukums`,`Kategorijas_id`) VALUES (?)';

  const values = [req.body.nosaukums, req.body.Kategorijas_id];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/variacijas/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM variacijas WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/variacijas/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE variacijas SET `nosaukums`= ?, `Kategorijas_id`= ? WHERE id = ?';

  const values = [req.body.nosaukums, req.body.Kategorijas_id];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`variacijas` BEIGAS*/

/*`variacijas_dati`*/
app.get('/variacijas_dati', (req, res) => {
  const query = 'SELECT * FROM variacijas_dati';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/variacijas_dati', (req, res) => {
  const query = 'INSERT INTO variacijas_dati(`vertiba`,`Variacijas_id`) VALUES (?)';

  const values = [req.body.vertiba, req.body.Variacijas_id];
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete('/variacijas_dati/:id', (req, res) => {
  const id = req.params.id;
  const query = ' DELETE FROM variacijas_dati WHERE id = ? ';

  db.query(query, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put('/variacijas_dati/:id', (req, res) => {
  const id = req.params.id;
  const query = 'UPDATE variacijas_dati SET `vertiba`= ?, `Variacijas_id`= ?';

  const values = [req.body.vertiba, req.body.Variacijas_id];

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
/*`variacijas_dati` BEIGAS*/

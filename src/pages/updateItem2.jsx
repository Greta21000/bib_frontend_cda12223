import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./updateItem.css";

const UpdateItem2 = (props) => {
  const [form, setForm] = useState({
    id: "__" + Math.random().toString(16).slice(-4),
    typeItem: "",
    titre: "",
    annee: "",
    auteur: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [oeuvre, setOeuvre] = useState({});
  const oeuvreId = useParams().oeuvreId;
  const history = useHistory();
    console.log(oeuvreId);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        // process.env.REACT_APP_BACKEND_URL + `/${props.route}/${oeuvreId}`
        `http://localhost:5000/api/musiques/${oeuvreId}`
      );
      response = await response.json();
       if(props.route === "musiques"){
      setOeuvre(response.musique);
       setForm(response.musique);
     } else {
       setForm(response.film);
     }
    }
    fetchData();
    // console.log({oeuvre})
  }, [oeuvreId, props.route]);

  const itemUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(form.titre);
    async function updateData() {
      try {
        await fetch(
          // process.env.REACT_APP_BACKEND_URL + `/${props.route}/${oeuvreId}`,
          `http://localhost:5000/api/musiques/${oeuvreId}`,
          {method: "PATCH",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            titre: form.titre,
            annee: form.annee,
            auteur: form.auteur,
            imageUrl: form.imageUrl,
          })},
          );
      } catch (err) {
          console.log(err.message);
      }
        history.push(`/`);
    }
    updateData();
    //
    // } catch (err) {}
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // setOeuvre({
    //   ...oeuvre,
    //   [e.target.name]: e.target.value,
    // });
    handleValidation(e.target.name);
    // console.log(form);
  };

  // const [submitted, setSubmitted] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (handleValidation() === true) {
  //       props.handleClick(form);
  //       // setSubmitted(true);
  //     }
  //   };

  const handleValidation = (itemToControl) => {
    let errors = {};
    let isFormValid = true;

    if (!itemToControl || itemToControl === "titre") {
      if (!form.titre) {
        isFormValid = false;
        errors.titre = "Le titre doit être renseigné!";
      } else if (typeof form.titre !== undefined) {
        if (!form.titre.match(/^[0-9a-zA-Z\- ]+$/)) {
          isFormValid = false;
          errors.titre = "Ne doit contenir que des lettres ou des chiffres!";
        }
      }
    }

    if (!itemToControl || itemToControl === "annee") {
      if (!form.annee) {
        isFormValid = false;
        errors.annee = "L'année doit être renseignée!";
      } else if (typeof form.annee !== undefined) {
        if (!form.annee.match(/^[0-9]+$/)) {
          isFormValid = false;
          errors.annee = "Ne doit contenir que des chiffres sur 4 caractères!";
        }
      }
    }

    if (!itemToControl || itemToControl === "auteur") {
      if (!form.auteur) {
        isFormValid = false;
        errors.auteur = "L'auteur doit être renseigné!";
      } else if (typeof form.auteur !== undefined) {
        if (!form.auteur.match(/^[a-zA-Z\- ]+$/)) {
          isFormValid = false;
          errors.auteur = "Ne doit contenir que des lettres!";
        }
      }
    }

    // if (!itemToControl || itemToControl === "imageUrl") {
    //   if (!form.imageUrl) {
    //     isFormValid = false;
    //     errors.imageUrl = "L'url de l'image doit être renseignée!";
    //   }
    //   else if (typeof form.imageUrl !== undefined) {
    //     if (!form.imageUrl.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
    //       isFormValid = false;
    //       errors.imageUrl = "Ne doit contenir que des lettres ou des chiffres!";
    //     }
    //   }
    // }

    setErrors(errors);
    return isFormValid;
  };

  return (
    <div className="div-tag">
      <form className="form-tag" onSubmit={itemUpdateSubmitHandler}>
        <h3>Ajouter un document</h3>
        {/* <label htmlFor="typeItem" className="label-tag">
              Type de de document : 
            </label>
            <div onChange={(e) => handleChange(e)}>
            <input type="radio" value="Musique" name="typeItem" /> Musique
            <input type="radio" value="Film" name="typeItem" /> Film
            </div> */}

        <label htmlFor="titre" className="label-tag">
          Titre: <span>*</span>
        </label>
        <input
          type="text"
          id="titre"
          name="titre"
          className="input-tag"
          placeholder="Renseigner le titre"
          value={form.titre} //{form.name}
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errors.titre}</span>

        <label htmlFor="annee" className="label-tag">
          Année: <span>*</span>
        </label>

        <input
          type="text"
          id="annee"
          name="annee"
          className="input-tag"
          placeholder="Renseigner l'année"
          value={form.annee} //{form.annee}
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errors.annee}</span>

        <label htmlFor="auteur" className="label-tag">
          Auteur: <span>*</span>
        </label>

        <input
          type="text"
          id="auteur"
          name="auteur"
          className="input-tag"
          placeholder="Renseigner l'auteur"
          value={form.auteur} //{form.auteur}
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errors.auteur}</span>

        <label htmlFor="imageUrl" className="label-tag">
          Url de l'image: <span>*</span>
        </label>

        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="input-tag"
          placeholder="Renseigner l'url de l'image"
          value={form.imageUrl} //{form.imageUrl}
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errors.imageUrl}</span>

        <br></br>
        <button type="submit" className="button-tag">
          Valider
        </button>
      </form>
    </div>
  );
};

export default UpdateItem2;

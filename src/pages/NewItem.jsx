import React, { useState } from "react";

import "./Item.css";

const NewItem = () => {
  const [form, setForm] = useState({
    titre: "",
    annee: "",
    auteur: "",
    imageUrl: "",
  });

  const [errorsForm, setErrorsForm] = useState({
    // titre: "",
    // annee: "",
    // auteur: "",
    // imageUrl: "",
  })

  const itemSubmitHandler = e => {
    e.preventDefault();
    console.log(form);
    console.log("Ok!")
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    handleValidation(e.target.name);
    console.log(form);
  };

  const handleValidation = (itemToControl) => {
    let isFormValid = true;
    let errors = {};

    if( itemToControl === "titre"){
        if(!form.titre){
            isFormValid=false;
            errors.titre="Le titre doit être renseigné";
        } else if (form.titre !== undefined){
            if(!form.titre.match(/^[0-9a-zA-Z\-àé ]+$/)){
                isFormValid=false;
                errors.titre="Le titre ne doit contenir que des lettres ou des chiffres";
            }
        }
        setErrorsForm({
            ...errorsForm,
            titre: errors.titre,
            //errors
          });
    }

    if( itemToControl === "annee"){
        if(!form.annee){
            isFormValid=false;
            errors.annee="L'année doit être renseigné";
        } else if (form.annee !== undefined){
            if(!form.annee.match(/^[0-9]+$/)){
                isFormValid=false;
                errors.annee="L'année doit contenir que des chiffres sur 4 caractères !";
            }
        }
        setErrorsForm({
            ...errorsForm,
            annee: errors.annee,
            //errors
          });
    }

    if( itemToControl === "auteur"){
        if(!form.auteur){
            isFormValid=false;
            errors.auteur="L'auteur doit être renseigné";
        } else if (form.auteur !== undefined){
            if(!form.auteur.match(/^[0-9a-zA-Z\-àé ]+$/)){
                isFormValid=false;
                errors.auteur="L'auteur doit contenir que des lettres ou des chiffres !";
            }
        }
        setErrorsForm({
            ...errorsForm,
            auteur: errors.auteur,
            //errors
          });
    }

    console.log(errorsForm);
    return isFormValid;

  }

  return (
    <div className="div-tag">
      <form className="form-tag" onSubmit={itemSubmitHandler}>
        <h3>Ajouter un élément</h3>
        <label htmlFor="titre" className="label-tag">
          Titre: <span>*</span>
        </label>
        <input
          type="text"
          id="titre"
          name="titre"
          className="input-tag"
          placeholder="Renseigner le titre"
          onChange={(e) => handleChange(e)}
        />
        <span className="error-tag">{errorsForm.titre}</span>

        <label htmlFor="annee" className="label-tag">
          Année: <span>*</span>
        </label>
        <input
          type="text"
          id="annee"
          name="annee"
          className="input-tag"
          placeholder="Renseigner l'année"
          onChange={(e) => handleChange(e)}
        ></input>
        <span className="error-tag">{errorsForm.annee}</span>

        <label htmlFor="auteur" className="label-tag">
          Auteur: <span>*</span>
        </label>
        <input
          type="text"
          id="auteur"
          name="auteur"
          className="input-tag"
          placeholder="Renseigner l'auteur"
          onChange={(e) => handleChange(e)}
        ></input>
        <span className="error-tag">{errorsForm.auteur}</span>

        <label htmlFor="imageUrl" className="label-tag">
          Image URL: <span>*</span>
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="input-tag"
          placeholder="Renseigner l'URL de l'image"
          onChange={(e) => handleChange(e)}
        ></input>
        <br />
        <button type="submit" className="button-tag">
          Valider
        </button>
      </form>
    </div>
  );
};

export default NewItem;

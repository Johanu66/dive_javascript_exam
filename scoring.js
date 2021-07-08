// Une fois le DOM chargé, exécutez le processus dans la fonction().
$(document).ready(function () {
    // Logique qui obtient les scores (valeurs d'entrée) de "Japonais, Anglais, Mathématiques, Sciences et Etudes sociales" et donne le score total et le score moyen.
    function score_indicate() {
    // Attribuez un tableau de notes pour "japonais, anglais, mathématiques, sciences, études sociales" à la variable "subject_points".
      let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
      ];
      // Ajoutez les scores de "japonais, anglais, mathématiques, sciences et études sociales" à la variable "somme".
      let sum = 0;
      for(let i=0; i < subject_points.length; i++){
          sum += subject_points[i];
      }
      // Laissez "sum_indicate :" (id="sum_indicate") produire la variable "sum" (score total).
      $("#sum_indicate").text(sum);
      // Décrire le processus d'édition du score moyen de chaque sujet dans "score moyen :".
      let averageIndicate = sum / subject_points.length;
      $("#average_indicate").text(averageIndicate);
    };
    // Décrivez la logique qui obtient la note moyenne et la classe en "A, B, C ou D" en fonction de la note moyenne obtenue.
    function get_achievement() {
        // A la variable "averageIndicate", nous récupérons le score moyen à partir de id="average_indicate" sur le HTML et l'affectons à celui-ci.
        let averageIndicate = $("#average_indicate").text();
        // Si "averageIndicate" est supérieur ou égal à 80, renvoyer "A".
        if (averageIndicate >= 80) {
            return "A";
        }
        // Si "averageIndicate" est égal ou supérieur à 60, retournez "B".
        else if(averageIndicate >= 60){
            return "B";
        }
        // Si "averageIndicate" est égal ou supérieur à 40, retournez "C".
        else if(averageIndicate >= 40){
            return "C";
        }
        // Si "averageIndicate" est différent, renvoyer "D".
        else{
            return "D";
        }
  };
  // Obtenez les notes pour chaque matière et créez une logique pour prendre une décision de "réussite ou d'échec" en fonction des notes obtenues.
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // Affectez le nombre de sujets saisis à la variable "nombre".
    let number = subject_points.length;
    // Assignez "pass" à la variable "judge".
    let judge = "Eligibility";
    // Ecrivez un processus pour réassigner "fail" à la variable "judge" si l'un des scores est inférieur à 60 pour chacun des sujets saisis.
    if(Math.min.apply(null, subject_points) < 60){
        judge = "Fail";
    }
    // Indice : examinons le traitement itératif des tableaux.
    return judge;
  };
  // Créer la logique du juge final.
  function judgement() {
    // Attribuez la "valeur de retour de get_achievement()" à la variable "achievement".
    let achievement = get_achievement();
    // Attribuez la "valeur de retour de get_pass_or_failure()" à la variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // Lorsque j'appuie sur le bouton "Juge final" (id="alerte-indicateur"), il est indiqué "Votre note est ${réalisation}. ${pass_or_failure}. est produit.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}. You ${pass_or_failure}.</label>`);
  };
  // C'est le processus qui déclenche la fonction score_indicate() lorsque l'un des scores de [scores en japonais, scores en anglais, scores en mathématiques, scores en sciences, scores en sciences sociales] est modifié.
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
   // Lorsque le bouton "classement" (id="évaluation") est pressé, "get_achievement()" est le processus de sortie.
   $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
  // Lorsque le bouton "juge" (id="btn-judge") est pressé, la "fonction et_pass_ou_failure()" est le processus de sortie.
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
  // Lorsque le bouton "Juge final" (id="btn-declaration") est pressé, le processus "function judgement()" est exécuté.
  // Lorsque l'on appuie sur le bouton "juge final" pour la deuxième fois ou plus, l'élément HTML du juge qui était affiché jusqu'alors est supprimé, et un nouvel élément HTML du juge est ajouté.
  // Astuce : consultez la méthode de suppression.
  $('#btn-declaration').click(function () {
    $("#declaration").text("");
    judgement();
  });
});
// La description JavaScript ici n'est qu'un modèle préparé comme une indication, donc si vous voulez l'implémenter sans suivre la description écrite, vous pouvez l'implémenter comme vous voulez. Vous réussirez l'examen si vous remplissez toutes les conditions requises.
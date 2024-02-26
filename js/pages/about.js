import { updateText } from "../modules/config.js";

document.addEventListener('DOMContentLoaded', function(){

   let buttons = document.querySelectorAll('.btnAbout')

   for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(i === 0){
                updateText('Apresentação', 'Olá, meu nome é Anderson Ashael e eu sou um desenvolvedor front-end júnior. Minha apredizagem com desenvolvimento web ocorreu quando eu ainda era criança, foi quando tive meu primeiro contato com as linguagens de marcação HTML e CSS nas quais desenvolvi meus primeiros projetos, que até então, eram nada além de um hobbie! O desejo em atuar como profissional na área de programação só surgiu bem mais tarde, quando eu já estava no ensino médio.')
            }
            else{
                updateText('Experiências', 'Foi no segundo ano do ensino médio que comecei a encarar a programação com mais seriedade! Trabalhei como menor aprendiz durante três meses em uma empresa local de João Pessoa/PB, utilizando desenvolvimento web para criar APPs voltados para Android e iOS. Me aprofundei em HTML, CSS e fui introduzido a novas tecnologias tais como Bootstrap, React Native, Ajax e Javascript')
            }
        })
   }

})

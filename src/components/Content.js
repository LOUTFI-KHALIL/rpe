import React, { Component } from 'react';
import './Content.css'
class Contents extends Component {
    state = {  }
    render() { 
        return (  
        <div className="Content">
            <row>
            <h1>this id the contentt</h1> <br/>
            </row>
             <row>
             <h6>Où puis-je m'en procurer?
Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.</h6>
             </row>
           
        </div>
       
        );
    }
}
 
export default Contents;
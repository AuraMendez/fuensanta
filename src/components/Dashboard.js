import React from 'react';
import Textarea from './Textarea.js'

function Dashboard() {
    
    const bio = {
        en: `the singer, bassist and composer Fuensanta Méndez was born and raised in the water forest of Veracruz (Mexico) to an artistic family. She grew up surrounded by traditional Latin-American and contemporary European music, dance, theater and books. At thirteen she decided to be a singer and began studying and performing jazz, at fifteen she started writing poetry.
    
        Méndez moved to the Netherlands to study at the Conservatory of Amsterdam, from which she graduated summa cum laude in 2019. She debuted her compositions during the Princess Christina Jazz Concours in 2016, achieving 1st place, the press prize and an invitation to perform with her quintet in North Sea Jazz 2017. Since then she has performed around Europe and Mexico as a solo artist, bandleader, and sidewoman in various situations related to improvised music. She was grantee of Jóvenes Creadores 2019 from FONCA, a national award for young composers in Mexico.
    
        Her first release, the live album "Ensamble Grande" is out from May 1st 2020.`,
        es: `La cantante, bajista y compositora Fuensanta Méndez nació y se crió en la selva acuática de Veracruz (México) en el seno de una familia de artistas. Creció rodeada de música, danza, teatro y libros tradicionales latinoamericanos y europeos contemporáneos. A los trece años decidió ser cantante y empezó a estudiar e interpretar jazz, a los quince empezó a escribir poesía.

        Méndez se mudó a los Países Bajos para estudiar en el Conservatorio de Amsterdam, donde se graduó summa cum laude en 2019. Debutó sus composiciones durante el Princess Christina Jazz Concours en 2016, logrando el 1er lugar, el premio de la prensa y una invitación para tocar con ella. quinteto en North Sea Jazz 2017. Desde entonces se ha presentado por Europa y México como solista, líder de banda y acompañante en diversas situaciones relacionadas con la música improvisada. Fue becaria de Jóvenes Creadores 2019 del FONCA, premio nacional para jóvenes compositores en México.
        
        Su primer lanzamiento, el álbum en vivo "Ensamble Grande" sale el 1 de mayo de 2020.`,
    };
    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <div className='card'>
                <h3>Bio</h3>
                <div className='bio-textareas'>
                    <Textarea title="English" content={bio.en}></Textarea>
                    <Textarea title="Spanish" content={bio.es}></Textarea>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

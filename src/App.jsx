import React from 'react';
import './App.scss';

import colors from './utils/colors';
import Screen from './components/Screen/Screen';
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

import ursinho_pandinha_ok from './assets/img/ursinho_pandinha_ok.gif';
import ursinho_estudando from './assets/img/ursinho_estudando.gif';
import pandinha_brava from './assets/img/pandinha_fofa_cara_de_brava.gif';
import pandinha from './assets/img/pandinha.gif';
import ursinho_S2_pandinha from './assets/img/ursinho_S2_pandinha.gif';
import ursinha_chorando from './assets/img/ursinha_chorando.gif';
import ursinho_chorando from './assets/img/ursinho_chorando.gif';
import pandinha_martelo from './assets/img/pandinha_martelo.png';
import ursinho_catucando_pandinha from './assets/img/ursinho_catucando_pandinha.gif';
import ursinho_coracao from './assets/img/ursinho_coracao.jpg';
import pandinha_coracao from './assets/img/pandinha_coracao.gif';
import ursinhos_apaixonados from './assets/img/ursinhos_apaixonados.gif';
import ursinhos_caminhada from './assets/img/ursinhos_caminhada.jpg';
import ursinhos_fotinha from './assets/img/ursinhos_fotinha.jpg';
import ursinhos_bebida from './assets/img/ursinhos_bebida.gif';
import ursinha_mordidas from './assets/img/ursinha_mordidas.gif';
import ursinho_pegando_no_sono from './assets/img/ursinho_pegando_no_sono.gif';
import ursinhos_dormindo from './assets/img/ursinhos_dormindo.gif';
import steph_esteban from './assets/img/steph_esteban.jpg';

const App = () => {
  document.body.style.overflow = 'hidden';

  return (
    <>
      <div className="main2">
        <Screen
          imageUrl={ursinho_pandinha_ok}
          bgColor={colors.color1}
          textColor={colors.white}
          title="Eres una gran amiga"
          text="Desde que te conocí siempre supe que como amiga eras de las mejores y quiero seguirte llamando amiga"
          btnText="Continuar"
          sequency="1"
        />
        <Screen
          imageUrl={ursinho_estudando}
          bgColor={colors.color2}
          textColor={colors.white}
          title="Me quieres como soy"
          text="Soy una persona complicada y así como soy de complicado aprendiste a quererme tal cual soy y me aceptaste"
          btnText="Continuar"
          sequency="2"
        />
        <Screen
          imageUrl={pandinha}
          bgColor={colors.color3}
          textColor={colors.white}
          title="Me encanta tu personalidad"
          text="Así como eres de divertida, de amorosa, de atenta me gustas"
          btnText="Continuar"
          sequency="3"
        />
        <Screen
          imageUrl={ursinho_S2_pandinha}
          bgColor={colors.color4}
          textColor={colors.white}
          title="Lo chineada nunca falla"
          text="Eres la chineada que siempre quiero tener a mi lado, siempre esperes el famoso 'Princess treat'"
          btnText="Continuar"
          sequency="4"
        />
        <Screen
          imageUrl={ursinha_chorando}
          bgColor={colors.color5}
          textColor={colors.white}
          title="Me dejas verte como eres"
          text="Tal vez otros te ven muy fuerte y siempre capaz con todo pero todos somos humanos y tu me dejas ver ese lado fragil tuyo"
          btnText="Continuar"
          sequency="5"
        />
        <Screen
          imageUrl={ursinho_chorando}
          bgColor={colors.color6}
          textColor={colors.white}
          title="Estas para mi cuando lo necesito"
          text="Cuando me he puesto triste tu siempre me cuidaste y me abrazaste"
          btnText="Continuar"
          sequency="6"
        />
        <Screen
          imageUrl={pandinha_martelo}
          bgColor={colors.color7}
          textColor={colors.white}
          title="Me haces ser mejor persona"
          text="Me regañas y me llamas la atención haciendome crecer pero tambien siempre aprendo de ti y de como actuas"
          btnText="Continuar"
          sequency="7"
        />
        <Screen
          imageUrl={pandinha_brava}
          bgColor={colors.color8}
          textColor={colors.white}
          title="Me gustan tus enojos"
          text="No hay mucho que decir, a veces soy un caso especial y tu me soportas asi jaja"
          btnText="Continuar"
          sequency="8"
        />
        <Screen
          imageUrl={ursinho_catucando_pandinha}
          bgColor={colors.color9}
          textColor={colors.white}
          title="Me tienes paciencia2"
          text="No hay mucho que decir,2 a veces soy un caso especial y tu me soportas asi jaja"
          btnText="Continuar"
          sequency="9"
        />
        <Screen
          imageUrl={ursinho_coracao}
          bgColor={colors.color10}
          textColor={colors.white}
          title="Todo mi cariño siempre es para ti"
          text="No soy para nada alguien amoroso o cariñoso pero siempre logras sacar ese lado mio"
          btnText="Owwww <3"
          sequency="10"
        />
        <Screen
          imageUrl={pandinha_coracao}
          bgColor={colors.color11}
          textColor={colors.white}
          title="Romantica en todo momento"
          text="Eres super mega romantica y demuestras tu cariño o afecto de maneras maravillosas"
          btnText="Owwww <3"
          sequency="11"
        />
        <Screen
          imageUrl={ursinhos_apaixonados}
          bgColor={colors.color12}
          textColor={colors.white}
          title="Tienes perseverancia"
          text="De no ser por tu perseverancia y tenacidad al principio no estariamos acá"
          btnText="Continuar"
          sequency="12"
        />
        <Screen
          imageUrl={ursinhos_caminhada}
          bgColor={colors.color13}
          textColor={colors.white}
          title="Nos justa pasar siempre el tiempo juntos"
          text="Contigo el tiempo siempre se pasa super rapido, es divertido y siempre acogedor"
          btnText="Continuar"
          sequency="13"
        />
        <Screen
          imageUrl={ursinhos_fotinha}
          bgColor={colors.color1}
          textColor={colors.white}
          title="Porque me obligas a hacer cosas nuevas"
          text="Contigo he hecho muchas cosas nuevas y tomarme mas fotos ha sido una de ellas"
          btnText="Continuar"
          sequency="14"
        />
        <Screen
          imageUrl={ursinhos_bebida}
          bgColor={colors.color2}
          textColor={colors.white}
          title="Buena compañera de tragos"
          text="Soy alguien quien no sale a nunca y menos a tomar pero contigo ese tiempo siempre es excelente y se disfruta la compañia tuya"
          btnText="Continuar"
          sequency="15"
        />
        <Screen
          imageUrl={ursinha_mordidas}
          bgColor={colors.color3}
          textColor={colors.white}
          title="Eres energetica"
          text="Yo siempre tengo pereza y ando cansado pero contigo esa energia se contagia y siempre mi actitud cambia contigo cerca"
          btnText="Continuar"
          sequency="16"
        />
        <Screen
          imageUrl={ursinho_pegando_no_sono}
          bgColor={colors.color4}
          textColor={colors.white}
          title="Eres la primera y la ultima con la que hablo"
          text="No suelo hablar mucho por mensajes pero contigo podria hacerlo donde sea y como sea porque me gusta tenerte siempre en cuenta en mi dia a dia"
          btnText="Continuar"
          sequency="17"
        />
        <Screen
          imageUrl={ursinhos_dormindo}
          bgColor={colors.color5}
          textColor={colors.white}
          title="Duermo comodamente contigo"
          text="Es una estupides? Sí pero si duermo tan bien junto a ti es porque tienes mi confianza absoluta"
          btnText="Continuar"
          sequency="18"
        />
        <Screen
          imageUrl={steph_esteban}
          bgColor={colors.color11}
          textColor={colors.white}
          title="Me haces feliz"
          text="Te convertiste en la razon porque la que le sonrio a los mensajes en el celular, la razon por la cual me recargas las energias cuando estoy contigo"
          btnText="Última razón tan tan tan..."
          sequency="19"
        />
      </div>
      <div className="app">
        <Banner />
      </div>
    </>
  );
};

export default App;

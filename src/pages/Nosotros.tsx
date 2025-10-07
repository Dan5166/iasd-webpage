// src/pages/Nosotros.tsx
import fondo from "../assets/banner/iasd-las-condes-iglesia.jpg";
import franciscoAguilera from "../assets/people/FrancisoAguilera.jpg";

export default function Nosotros() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-blue-900 text-white py-32 text-center overflow-hidden">
        <img
          src={fondo}
          alt="Fondo comunidad"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Sobre Nosotros
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
            Somos una comunidad de fe que busca compartir el evangelio eterno,
            vivir en el amor de Cristo y servir con alegría a quienes nos
            rodean.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Anunciar las buenas nuevas de Jesucristo y preparar a las personas
            para su pronto regreso, fortaleciendo la fe y la esperanza en cada
            corazón.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Nuestra Visión
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ser una iglesia acogedora, activa y comprometida con la enseñanza
            bíblica y el servicio a la comunidad, mostrando el amor de Dios en
            cada acción.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-24">
        <div>
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Nuestra Historia
          </h1>
          <div className="grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
            En esta propiedad de la comuna de Las Condes había funcionado el
            internado el Craighouse School, el que se había trasladado
            recientemente a un nuevo lugar más amplio, donde actualmente se
            encuentra ubicado el Apumanque. La casona estaba equipada hasta con
            laboratorio de química y biología, tenía unos jardines
            espectaculares, piscina y salas adicionadas a la casona principal;no
            obstante lo anterior, estaba abandonada por cerca de un año. Por lo
            tanto, hubo que acondicionarla para nuestros fines. Por lo que un
            grupo de profesores, pastores, familiares y laicos se pusieron manos
            a la obra acomodando las dependencias. Teniendo en cuenta todas
            estas ventajas, en un tiempo realmente breve, invocando al Señor
            para que mostrara Su voluntad en la realización de este proyecto;
            vimos Su mano, ya que se unió la División Sudamericana, la Unión
            Chilena y el campo local, todas instituciones adventistas, para
            entregar los recursos y proceder a la adquisición de la propiedad,
            que había sido construida por don Fernando Márquez de la Plata, a
            quien se le compró. La casona principal contaba en el frontis con un
            amplio salón de Damas y uno contiguo de Caballeros separado por un
            amplio pasillo que desembocaba en un hall amplísimo que comunicaba
            con el segundo piso con una escala maravillosa donde posteriormente
            se realizaron muchos eventos, ya que recordaba a los salones suizos.
            El primer salón, el de las Damasera amplio, bellísimo, cómodo, con
            grandes ventanales, luminoso y abrigadito, con una chimenea de
            mármol que calentaba los fríos inviernos,(que en ese tiempo eran
            extremadamente helados en Santiago) se usó como salón para realizar
            nuestra actividades de adoración los días sábados, tanto de escuela
            sabática como del segundo servicio. La primera reunión contó con 26
            miembros, los que se constituyeron como grupo organizado para
            adecuar el lugar a nuestras necesidades, como ya se indicó más
            arriba, realizando funciones de jardinería, limpieza, Ya en las
            reuniones siguientes fueron adicionándose más miembros, no siendo
            más de 40, entre los cuales se puede destacar la familia de don
            Carlos Almonte y Edith Koncilja y sus hijos, la familia de don
            Manuel Aguilera y su señora Amalia Gajardo, con sus hijos Francisco
            y Gladys, la familia de don Julio Padilla y Sebastiana Argote y sus
            hijas Maritza, Ilsen, Ivonne y Franklin, familia Bravo, familia del
            pastor Werner Maier, familia de don Mario Ogsaen, familia Plaza, la
            señora Ana Saavedra Derpich, familia de don Abner Soto, familia
            Ossio, señorita Graciela Rivadeneira, y, otras personas cuyos
            nombres se nos escapan.
          </div>
        </div>
        <div className="mt-16 container mx-auto px-6 flex flex-col md:flex-row items-stretch gap-8">
          {/* Imagen del fundador */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={franciscoAguilera}
              alt="Francisco Aguilar Gajardo"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Texto descriptivo */}
          <div className="md:w-2/3 leading-relaxed space-y-4">
            <p>
              Alrededor del año 1971 nuestra hermandad, inspirada por el
              Espíritu Santo, sintió la necesidad de abrir obra misionera en el
              sector oriente de la capital de Chile, con un doble propósito:
              contar con un lugar en el sector oriente de Santiago, en el cual
              reunirse y esparcir las buenas nuevas del evangelio, ya que había
              familias (laicos, profesores), -incluidas las de los pastores que
              trabajaban en el domicilio de la Unión Chilena, ubicada cerca de
              la actual estación Escuela Militar de la línea del Metro-; y
              trasladar el colegio adventista que funcionaba en calle Isidro en
              el centro de Santiago, en un edificio ruinoso, imposible de seguir
              impartiendo enseñanza en ese lugar.
            </p>
            <p>
              El Señor intervino en forma providencial, ya que un miembro de
              iglesia (don Francisco Aguilera Gajardo), pasando por el sector de
              Apoquindo, vio una propiedad que se arrendaba; y al bajarse, el
              Señor proporcionó los contactos precisos para adquirir una
              señorial casona, estilo neoclásico, ubicada en Avenida Apoquindo
              esquina Luis Zegers, corazón (en ese tiempo) de la comuna de Las
              Condes, la que reunía todos los requisitos básicos necesarios para
              instalar una iglesia; y, además, el colegio de enseñanza
              secundaria anteriormente mencionado.
            </p>
            <p>
              Este Liceo Adventista de Santiago lo hizo empezando con tres años
              de enseñanza secundaria, 186 estudiantes y nueve maestros. Esta
              misma institución, posteriormente es la que se trasladó a esta
              propiedad, por lo que fue conocido en adelante como Colegio
              Adventista de Las Condes (CALC).
            </p>
          </div>
        </div>
        <div className="mt-24 container mx-auto px-6 flex flex-col md:flex-row items-stretch gap-8">
          {/* Texto descriptivo */}
          <div className="md:w-2/3 leading-relaxed space-y-4 text-gray-700 text-justify">
            <p>
              En esta propiedad de la comuna de Las Condes había funcionado el
              internado el Craighouse School, el que se había trasladado
              recientemente a un nuevo lugar más amplio, donde actualmente se
              encuentra ubicado el Apumanque.
            </p>
            <p>
              La casona estaba equipada hasta con laboratorio de química y
              biología, tenía unos jardines espectaculares, piscina y salas
              adicionadas a la casona principal; no obstante lo anterior, estaba
              abandonada por cerca de un año. Por lo tanto, hubo que
              acondicionarla para nuestros fines. Por lo que un grupo de
              profesores, pastores, familiares y laicos se pusieron manos a la
              obra acomodando las dependencias.
            </p>
            <p>
              Teniendo en cuenta todas estas ventajas, en un tiempo realmente
              breve, invocando al Señor para que mostrara Su voluntad en la
              realización de este proyecto; vimos Su mano, ya que se unió la
              División Sudamericana, la Unión Chilena y el campo local, todas
              instituciones adventistas, para entregar los recursos y proceder a
              la adquisición de la propiedad, que había sido construida por don
              Fernando Márquez de la Plata, a quien se le compró.
            </p>
            <p>
              La casona principal contaba en el frontis con un amplio salón de
              Damas y uno contiguo de Caballeros separado por un amplio pasillo
              que desembocaba en un hall amplísimo que comunicaba con el segundo
              piso con una escala maravillosa donde posteriormente se realizaron
              muchos eventos, ya que recordaba a los salones suizos.
            </p>
            <p>
              El primer salón, el de las Damas, era amplio, bellísimo, cómodo,
              con grandes ventanales, luminoso y abrigadito, con una chimenea de
              mármol que calentaba los fríos inviernos (que en ese tiempo eran
              extremadamente helados en Santiago) se usó como salón para
              realizar nuestras actividades de adoración los días sábados, tanto
              de escuela sabática como del segundo servicio.
            </p>
            <p>
              La primera reunión contó con 26 miembros, los que se constituyeron
              como grupo organizado para adecuar el lugar a nuestras
              necesidades, como ya se indicó más arriba, realizando funciones de
              jardinería, limpieza.
            </p>
            <p>
              Ya en las reuniones siguientes fueron adicionándose más miembros,
              no siendo más de 40, entre los cuales se puede destacar la familia
              de don Carlos Almonte y Edith Koncilja y sus hijos, la familia de
              don Manuel Aguilera y su señora Amalia Gajardo, con sus hijos
              Francisco y Gladys, la familia de don Julio Padilla y Sebastiana
              Argote y sus hijas Maritza, Ilsen, Ivonne y Franklin, familia
              Bravo, familia del pastor Werner Maier, familia de don Mario
              Ogsaen, familia Plaza, la señora Ana Saavedra Derpich, familia de
              don Abner Soto, familia Ossio, señorita Graciela Rivadeneira, y
              otras personas cuyos nombres se nos escapan.
            </p>
            <p>
              El segundo año el número de asistentes aumentó considerablemente
              y, a poco andar fue necesario ampliarnos y así fue como se utilizó
              el salón de Caballeros, igual de hermoso que el de las Damas y
              también equipado con chimenea de mármol.
            </p>
            <p>
              Nuestras actividades eran hermosas y muy familiares, nos
              turnábamos para tomar la lección de escuela sabática entre don
              Julio Padilla, don Francisco Aguilera y don Carlos Almonte.
              También se colaboraban con el Pastor en los sermones.
            </p>
          </div>
          {/* Columna de imágenes */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <img
              src={franciscoAguilera}
              alt="Francisco Aguilar Gajardo"
              className="w-full h-64 md:h-auto object-cover rounded-2xl shadow-lg flex-1"
            />
            <img
              src={franciscoAguilera}
              alt="Francisco Aguilar Gajardo"
              className="w-full h-64 md:h-auto object-cover rounded-2xl shadow-lg flex-1"
            />
          </div>
        </div>
      </section>

      {/* Texto bíblico */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-24 text-center">
        <blockquote className="max-w-2xl mx-auto text-2xl md:text-3xl italic font-medium text-blue-900">
          “Id por todo el mundo y predicad el evangelio a toda criatura.” <br />
          <span className="text-lg font-semibold">— Marcos 16:15</span>
        </blockquote>
      </section>
    </div>
  );
}

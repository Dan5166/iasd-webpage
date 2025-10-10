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
          <div className="grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed space-y-4">
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
              src="https://static.wixstatic.com/media/d00fbf_3439a5f6939b4a23b7415162a39fbabd~mv2.jpg/v1/fill/w_277,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Carlos%20Almonte_edited.jpg"
              alt="Don Carlos Almonte"
              className="w-full h-64 md:h-auto object-cover rounded-2xl shadow-lg flex-1"
            />
            <img
              src="https://static.wixstatic.com/media/d00fbf_ab58b497dd6e4c529b3e7fcef5d959c8~mv2.jpg/v1/fill/w_266,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Julio%20Padilla_edited.jpg"
              alt="Don Julio Padilla"
              className="w-full h-64 md:h-auto object-cover rounded-2xl shadow-lg flex-1"
            />
          </div>
        </div>
        <div className="mt-24 container mx-auto px-6">
          <p className="mt-24 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
            El segundo año el número de asistentes aumentó considerablemente y,
            a poco andar fue necesario ampliarnos y así fue como se utilizó el
            salón de Caballeros, igual de hermoso que el de las Damas y también
            equipado con chimenea de mármol.
          </p>
          <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
            Nuestras actividades eran hermosas y muy familiares, nos turnábamos
            para tomar la lección de escuela sabática entre don Julio Padilla,
            don Francisco Aguilera y don Carlos Almonte. También se colaboraban
            con el Pastor en los sermones.
          </p>
          <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
            Así estuvimos algunos años, hasta que en la parte de pensó que en la
            propiedad se podía construir las dependencias de una iglesia, ya que
            el terreno era de unos 7.500 metros cuadrados. Por lo tanto, se
            echaron los cimientos del proyecto, donde los laicos aportaron
            significativamente en el financiamiento del mismo; consiguiéndose
            grandes rebajas en los costos: el arquitecto (don Julio Padilla
            Torreblanca) aportó con el proyecto arquitectónico, y el constructor
            encargado fue el Hermano José Miguel Valdivia; además, don Carlos
            Busso, donó un lindo vitral (diseñado por don Julio Padilla) cuyo
            motivo evangélico adventista es el mensaje de los 3 ángeles de
            Apocalipsis 14:6-11.
          </p>
          <p className="grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
            La construcción de la iglesia ubicada en los terrenos de la
            propiedad, con la dirección de Luis Zegers 130, fue dirigida por el
            hermano Belfor Yara Tirado. Una vez terminada la construcción de
            esta iglesia, fue dedicada al Señor, en una ceremonia solemne,
            realizada el 20 de noviembre de 1993, a las 11:00 horas.
          </p>
          <div className="mt-24 w-full">
            <h1 className="text-2xl font-bold text-center text-blue-800 mb-12">
              IASD Las Condes - Luis Zegers 130
            </h1>
            <img
              src="https://static.wixstatic.com/media/d00fbf_47f9d08da5b94b4caaedfd45c93dc507~mv2.jpg/v1/fill/w_658,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d00fbf_47f9d08da5b94b4caaedfd45c93dc507~mv2.jpg"
              alt="Iglesia Adventista Las Condes - Luis Zegers 130"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Esta iglesia llegó a estar constituida por más de 250 miembros que
              asistían regularmente, realizando significativas actividades, en
              que el compañerismo y cooperación con el Colegio Adventistas de
              Las Condes (CALC),fue la tónica de estos años, labor que fue
              realmente muy fructífera; y, cuyo último director fue don David
              Gómez, ya que una vez vendida la propiedad se trasladó a la comuna
              de La Reina, con el nombre de John Andrews Adventist Academy.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              En este lugar, la iglesia funcionó, siendo un faro de luz
              espiritual, hasta el año 2019, fecha en que emigramos
              transitoriamente porque la propiedad había sido vendida (dos años
              antes), el motivo era que debíamos esperar hasta que se
              construyera el nuevo templo en la propiedad adquirida para tal
              efecto.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Con esta nueva variable, la de no tener un lugar donde
              congregarnos, se había nombrado con anterioridad,una comisión para
              ubicar posibles propiedades que satisficiera nuestras necesidades
              de funcionamiento de adoración a Dios.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Tal es así que después de mucho buscar y sufrir muchos sinsabores,
              ya que además de onerosas las propiedades posibles solo nos
              permitían realizar nuestras actividades solo en la mañana del
              sábado. Pero, de nuevo el Señor nos bendijo, guiándonos a un lindo
              lugar transitorio donde congregarnos, y fue en Tomas Moro 261
              interior. En esta oportunidad fue el hermano Fernando Diaz, quien,
              con su esposa, se encontraban visitando posibles lugares para
              arrendar, pasaron por el frontis de la Villa de Vida Natural (ex
              Lazaeta Acharan), e inspirados por el Señor se bajaron a ver si
              era posible que nuestra comunidad pudiese realizar las actividades
              religiosas propias en ese lugar.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              El lugar era realmente apropiado, ya que se trata de una villa que
              se encuentra en medio de la ciudad, pero tiene todas las
              características rurales. Su ubicación es en Tomas Moro 261
              interior.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Esta propiedad, de 4.000 metros cuadrados, contaba con una casona
              que había sido el internado donde se realizaban los tratamientos
              de Vida Sana Lazaeta Acharán, amplios estacionamientos y un
              gimnasio que la comunidad judía había adecuado como sinagoga. Aquí
              fue donde pasamos todo el tiempo de la pandemia; no obstante, la
              membresía se mantuvo, aunque algunos de ellos emigraron
              transitoriamente a iglesias cercanas.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              En este período de pandemia nos dirigió el pastor Luis Araya
              (q.e.p.d.), quien trabajó lado a lado con nosotros en la
              habilitación del lugar que arrendamos en Tomas Moro;
              posteriormente, terminó la adecuación del lugar el pastor Edinson
              Jaque, lugar que además necesitó labores de arquitectura y
              levantamiento de espacios techados y a resguardo del viento y la
              lluvia. Así cooperaron con el pastor Jaque, los misioneros Jahzeel
              Celis, Cristian Milla, Gerson Bobadilla y numerosos laicos.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              En este lugar nos unimos como nunca ya que tuvimos que acomodarlo
              a nuestros requerimientos, colaboraron más de 100 personas diarias
              todo el mes de enero 2019, donde hicimos labores de carpintería,
              pintura, jardinería, construcción, etc.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Nuestros miembros, en este período de pandemia, pudieron mantener
              su membresía en la IASD Las Condes, primordialmente porque nos
              mantuvimos trasmitiendo nuestras actividades ON Line por YouTube,
              en el canal de la Iglesia de Las Condes. Este canal fue inaugurado
              en el año 2014, fecha en que de nuevo se manifestó el Señor, ya
              que nosotros sin saber lo importante que seria contar con el en
              los años venideros, incorporamos la tecnología del momento.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Así es como volviendo al tiempo de la pandemia, pudimos realizar,
              aunque sin público, bautismos, sermones y escuela sabática on
              line, matrimonios, ungimientos.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Terminada la pandemia, tuvimos la bendición de ser la primera
              iglesia de la Asociación Metropolitana Chilena en hacerlo en forma
              presencial, ya que sí era solicitado por numerosa feligresía que
              estaba muy dispuesta a reencontrarse con los hermanos en la fe.
            </p>
            <h1 className="text-2xl font-bold text-center text-blue-800 mb-12 mt-24">
              IASD Las Condes - Tomás Moro 261 Interior
            </h1>
            <img
              src="https://static.wixstatic.com/media/d00fbf_0241e420aec24fa79fc2ba7ee1ce6275~mv2.jpeg/v1/fill/w_658,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d00fbf_0241e420aec24fa79fc2ba7ee1ce6275~mv2.jpeg"
              alt="Iglesia Adventista Las Condes - Tomás Moro 261 Interior"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              En febrero del año 2022, estando terminada la construcción del
              templo nuevo, en conjunto con la John AndrewsAcademy, se llevo a
              cabo la inauguración de ambos edificios.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              No obstante, tuvimos que esperar casi un año, lo que sucedió en
              enero del año 2023 toda vez que se encontraba en esa fecha
              recepcionado por la Municipalidad, teniendo recién el gozo de
              llegar a nuestro hogar ubicado en Avenida IV Centenario 415
              esquina calle Monroe, edificio que puede albergar hasta 450
              miembros.
            </p>
            <h1 className="text-2xl font-bold text-center text-blue-800 mb-12 mt-24">
              Ceremonia colocación primera piedra e inicio de obras
            </h1>
            <img
              src="https://static.wixstatic.com/media/d00fbf_8568d9ec48404fb9aee36075880fa724~mv2.jpg/v1/fill/w_658,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d00fbf_8568d9ec48404fb9aee36075880fa724~mv2.jpg"
              alt="Ceremonia colocación primera piedra e inicio de obras"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Por el momento, habitualmente nos congregamos un promedio de 280
              personas en forma presencial y promedio unas 1.000 online; y
              esperamos pronto, con la ayuda del Señor, llenar este templo que
              estamos dedicando al Señor Todopoderoso hoy 02 de diciembre de
              2023, dado que la membresía local es más numerosa.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Desde el mes de enero 2023 estamos usando las dependencias
              adecuadas para el funcionamiento cabal de la iglesia, ya sea para
              actividades de adultos, jóvenes y niños y básicamente para el
              desarrollo de una congregación como la nuestra.
            </p>
            <h1 className="text-2xl font-bold text-center text-blue-800 mb-12 mt-24">
              Nuevo Templo IASD Las Condes - IV Centenario 415
            </h1>
            {/* Video del nuevo templo */}
            <img
              src="https://pbs.twimg.com/media/FL9wScmXsAgRQFQ.jpg"
              alt="Nuevo Templo IASD Las Condes - IV Centenario 415"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Actualmente en este año 2023, se encuentra a la dirección de la
              iglesia, el Pastor Jonathan Solís, quien se encontraba
              desempeñando sus funciones en Uruguay, y, del misionero, pastor de
              los Jóvenes, Jaime Valdebenito.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              El salón construido expresamente para funcionar como templo de
              iglesia cuenta con las instalaciones requeridas, modernas y de
              última generación imprescindibles para la liturgia adventista de
              adoración al Señor y los intensos requerimientos del día sábado.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              En el diseño original hay dependencias que se requieren para
              actividades complementarias, cuya construcción está pendiente,
              transformándose en un tercer piso.
            </p>
            <p className="mt-8 grid md:grid-cols-1 gap-12 container mx-auto px-6 leading-relaxed">
              Esta es una breve reseña de la rica historia de la IASD Las Condes
              cuyo templo dedicamos.
            </p>
            {/* Espacio para fecha */}
            <p className="mt-8 text-right text-gray-500 italic">
              Las Condes, Diciembre de 2023
            </p>
            {/* Espacio para agregar mas contenido */}
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

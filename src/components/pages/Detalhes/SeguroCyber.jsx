import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroCyber = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Em um mundo cada vez mais digital, a segurança dos dados e sistemas da
          sua empresa é essencial. Na Multiplusgroup Corretora de Seguros,
          oferecemos o Seguro Cyber, desenvolvido para proteger empresas
          brasileiras contra os crescentes riscos cibernéticos, como ataques
          hackers, vazamentos de dados e interrupções em sistemas. Trabalhamos
          com as principais seguradoras do mercado para oferecer soluções
          completas que garantem a segurança da sua empresa no ambiente digital.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          O Seguro Cyber cobre uma série de riscos, incluindo custos de
          recuperação de dados, notificação a clientes em caso de vazamento,
          custos de defesa jurídica e indenizações por danos a terceiros. Além
          disso, oferecemos coberturas adicionais, como proteção contra perda de
          receita devido à interrupção dos sistemas, extorsão cibernética, e
          reparação de danos à reputação. Com planos personalizados, sua empresa
          estará preparada para lidar com qualquer incidente digital,
          minimizando perdas e garantindo uma rápida recuperação.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nosso compromisso é proteger o futuro digital do
          seu negócio. Nossa equipe de corretores especializados está pronta
          para oferecer consultoria personalizada, identificando os riscos
          cibernéticos específicos da sua empresa e oferecendo as melhores
          soluções de cobertura. Conte conosco para proteger sua empresa contra
          ameaças virtuais, com segurança, eficiência e sem burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroCyber };

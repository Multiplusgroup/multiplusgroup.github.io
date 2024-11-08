import AnimatedSection from "@/ui/AnimatedSection";
import { Divider, Grid2 as Grid } from "@mui/material";

const ContentQuemSomos = () => {
  return (
    <Grid container className="my-[4rem] flex flex-col items-center">
      <Grid container className="mx-auto w-[85%] items-center justify-center">
        <AnimatedSection>
          <Grid className="flex w-full flex-col gap-5 lg:col-span-2">
            <h1 className="text-center">Título seção 1</h1>
            <p>
              Conteúdo seção 1. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat ut ipsam temporibus, a dolores ducimus ab
              enim aperiam nihil inventore vitae quas at qui dolorum officiis
              doloribus et debitis. Possimus facilis incidunt quae nam, ratione
              eius? Porro fugiat rerum eum quisquam debitis sed! Perspiciatis
              ullam non delectus! Eius, reprehenderit vitae soluta sequi modi
              animi laborum eveniet voluptate, veniam, minus consequatur!
              Exercitationem iste reiciendis magnam aperiam in. Blanditiis
              numquam repellat aperiam, esse aliquid ut adipisci placeat
              molestiae, fugit corrupti, perferendis fugiat dolores ipsam.
              Cupiditate, voluptatum dignissimos error molestias modi animi
              possimus aspernatur, debitis non voluptate eum voluptatem suscipit
              veniam accusantium. Exercitationem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut
              ipsam temporibus, a dolores ducimus ab enim aperiam nihil
              inventore vitae quas at qui dolorum officiis doloribus et debitis.
              Possimus facilis incidunt quae nam, ratione eius? Porro fugiat
              rerum eum quisquam debitis sed! Perspiciatis ullam non delectus!
              Eius, reprehenderit vitae soluta sequi modi animi laborum eveniet
              voluptate, veniam, minus consequatur! Exercitationem iste
              reiciendis magnam aperiam in. Blanditiis numquam repellat aperiam,
              esse aliquid ut adipisci placeat molestiae, fugit corrupti,
              perferendis fugiat dolores ipsam. Cupiditate, voluptatum
              dignissimos error molestias modi animi possimus aspernatur,
              debitis non voluptate eum voluptatem suscipit veniam accusantium.
              Exercitationem?
            </p>
            <Grid className="w-full space-y-3 py-4">
              <Divider
                className="divider justify-self-around"
                variant="middle"
              />
            </Grid>
          </Grid>
        </AnimatedSection>
        <AnimatedSection>
          <Grid className="flex !w-full flex-col items-center justify-center gap-5 lg:col-span-2">
            <h1 id="parceiras" className="text-center">
              Seguradoras parceiras (opcional)
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto iure, sit eius adipisci delectus beatae harum vel
              perferendis laudantium debitis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto iure, sit eius adipisci delectus beatae harum vel
              perferendis laudantium debitis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto iure, sit eius adipisci delectus beatae harum vel
              perferendis laudantium debitis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto iure, sit eius adipisci delectus beatae harum vel
              perferendis laudantium debitis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto iure, sit eius adipisci delectus beatae harum vel
              perferendis laudantium debitis!
            </p>
            <Grid className="w-full space-y-3 py-4">
              <Divider
                className="divider justify-self-around"
                variant="middle"
              />
            </Grid>
          </Grid>
        </AnimatedSection>
        <AnimatedSection>
          <Grid className="flex w-full flex-col gap-5 lg:col-span-2">
            <h1 className="text-center">Título seção 3</h1>
            <p>
              Prévia de texto seção 3. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Sint, quos numquam architecto asperiores
              cupiditate ducimus temporibus ad magni harum nostrum repellat
              ipsum adipisci voluptatem, aut consectetur sequi minus. Id at
              dicta quasi aperiam aliquam magni accusantium soluta delectus
              quidem iste.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              aliquam saepe officia tenetur ipsum obcaecati dolores
              exercitationem et harum sit ipsa, excepturi, deleniti quaerat
              voluptatibus laborum laboriosam nulla provident amet, fuga
              aspernatur. Magni excepturi sit nesciunt debitis provident
              mollitia nemo?
            </p>
          </Grid>
        </AnimatedSection>
      </Grid>
    </Grid>
  );
};

export default ContentQuemSomos;

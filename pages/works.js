import Layout from "../components/layouts/specifics";
import Section from "../components/utils/section";
import Chapter from "../components/utils/chapter";
import { SimpleGrid, Divider, Heading, Container } from "@chakra-ui/react";
import { GridItem } from "../components/sections/grid";

const Works = () => (
    <Layout title="Portfolio">
        <Container>
        <Section>
            <Chapter>
                Work
            </Chapter>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridItem id="inkdrop" title="Inkdrop">
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </GridItem>
        </Section>
        <Section>
          <GridItem
            id="walknote"
            title="walknote"
          >
            Music recommendation app for iOS
          </GridItem>
        </Section>

        <Section delay={0.1}>
          <GridItem
            id="fourpainters"
            title="The four painters"
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </GridItem>
        </Section>
        <Section delay={0.1}>
          <GridItem id="menkiki" title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </GridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <GridItem id="margelo" title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </GridItem>
        </Section>
        <Section delay={0.3}>
          <GridItem
            id="modetokyo"
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </GridItem>
        </Section>
        <Section delay={0.3}>
          <GridItem id="styly" title="Styly">
            A VR Creative tools for fashion brands
          </GridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <GridItem id="pichu2" title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </GridItem>
        </Section>
        <Section delay={0.5}>
          <GridItem
            id="freedbtagger"
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </GridItem>
        </Section>
        <Section delay={0.6}>
          <GridItem id="amembo" title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </GridItem>
        </Section>
      </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
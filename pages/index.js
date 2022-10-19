import { Heading, List, Link, Button, ListItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/utils/section'
import Chapter from '../components/utils/chapter'
import TextField from '../components/utils/textfield'
import Hero from '../components/sections/hero'
import { Carousel, GridCard } from '../components/sections/grid'

const Home = () => {
    return(
        <>
        <Hero/>
        <Layout>
            <Section>
                <Chapter>
                    About Me
                </Chapter>
                <TextField>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lorem non felis sollicitudin gravida sit amet eget erat. Nulla consequat ornare tempor. Nunc non tortor eu lorem iaculis eleifend. Nullam vehicula pellentesque placerat. Donec fermentum elementum iaculis. Nam mollis sollicitudin ex in feugiat. In hac habitasse platea dictumst. Pellentesque ac orci a sem efficitur malesuada. Nam nibh nisi, pulvinar eu viverra at, vehicula ac lacus. Ut ornare, nulla nec tincidunt lacinia, sapien neque sodales augue, nec venenatis urna risus ut quam. Sed quis diam est.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer at nibh sagittis, dictum justo eu, aliquet lacus. Duis ut lorem lacus. Donec tincidunt auctor vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et suscipit dui. Suspendisse potenti. Sed sit amet ipsum in est aliquet gravida vel eget augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </TextField>
            </Section>
            <Section>
                <Chapter>
                    Work
                </Chapter>
                <Carousel>
                    <GridCard title={"Nice"}></GridCard>
                    <GridCard title={"Nice"}></GridCard>
                    <GridCard title={"Nice"}></GridCard>
                    <GridCard title={"Nice"}></GridCard>
                </Carousel>
            </Section>
            <Section>
                <Chapter>
                    Contact Me
                </Chapter>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/Bartek-Tynior" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="pink"
                        >
                            @Bart Tynior on Github
                        </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Layout>
        </>
    )
}

export default Home
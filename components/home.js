import { Link, Typography, Stack } from "@mui/material";

const Home = () => {
    return (
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
            <h1 style={{
                marginTop: 0,
                marginBottom: "1rem"
            }}>About Me</h1>
            <div style={{ paddingBottom: "1.5rem" }}>
                <Stack style={{ textAlign: "justify" }} spacing={3}>
                    <Typography >
                        Hi, I’m Kailash, a final-year undergraduate computer science student at the National University of Singapore, expecting to graduate by May 2026.
                        While I am interested in all things computer science, my primary areas of interest are <b>back-end development</b> and <b>development in C++</b>.
                        I am also extremely passionate about <b>operating systems</b> and <b>parallel computing</b>, which are my areas of focus at NUS.
                    </Typography>
                    <Typography>
                        In the past, I have completed a number of software engineering internships at various companies. Apart from internships, I have worked on many technically challenging projects, including <a target="_blank" href="https://github.com/kaithanos/kaithanos">KaithanOS</a> (an operating system built from scratch) and <a target="_blank" href="https://github.com/janniver/interviewace">InterviewAce</a> (your very own AI technical interviewer), which I am eager to share. This website is a comprehensive portal about me, my projects, and my interests.
                    </Typography>
                    <Typography>
                        In my free time, I like to dabble in video game development and have created a number of games,
                        including <a target="_blank" href="https://kailash331215.itch.io/moneygame">
                            Money Tycoon
                        </a> and <a target="_blank" href="https://kailash331215.itch.io/tombgame">
                            Tomb of the Lost
                        </a>.
                        I am also an avid reader and enjoy reading books on technology and science fiction. And just like every other CS major, I kickstart my day with a hot cup of coffee!
                    </Typography>
                    <Typography>
                        This past summer, I interned at Goldman Sachs as a Software Engineer Intern under the Margin Engineering team.
                        I am currently interning at Squarepoint Capital as a C++ Software Engineer Intern under the Risk PnL team.
                    </Typography>
                    <Typography>
                        If you're interested in learning more about my work or discussing potential opportunities, please <Link href="/contact">contact me here</Link>.
                        You can also view my resume <Link href="/resume">here</Link>.
                    </Typography>
                    <Typography>
                        Enjoy exploring my site!
                    </Typography>
                </Stack>
            </div>
        </div>
    )
};

export default Home;


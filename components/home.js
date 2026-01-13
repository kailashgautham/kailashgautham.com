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
                        While I am broadly interested in computer science, my primary focus is on <b>C++</b> and <b>low-level, high-performance systems development</b>.
                        I am also extremely passionate about <b>operating systems</b> and <b>parallel computing</b>, which are my areas of focus at NUS.
                    </Typography>
                    <Typography>
                        In the past, I have completed a number of software engineering internships at various companies. Apart from internships, I have worked on many technically challenging projects, including <a target="_blank" href="https://github.com/kaithanos/kaithanos">KaithanOS</a> (an operating system built from scratch) and <a target="_blank" href="https://github.com/janniver/interviewace">InterviewAce</a> (your very own AI technical interviewer). This website is a comprehensive portal about me, my projects, and my interests.
                    </Typography>
                    <Typography>
                        In my free time, I like to dabble in video game development and have created a number of games,
                        including <a target="_blank" href="https://kailash331215.itch.io/moneygame">
                            Money Tycoon
                        </a> and <a target="_blank" href="https://kailash331215.itch.io/tombgame">
                            Tomb of the Lost
                        </a>.
                        I am also an avid reader and enjoy reading books on technology and science fiction. I also drink too much coffee for my own good.
                    </Typography>
                    <Typography>
                        This past summer, I interned at <b>Goldman Sachs</b> as a <b>Software Engineer</b> on the <b>Margin Engineering</b> team,
                        where I built a cool trend analysis platform that helps stakeholders understand the scale of margin operations.
                    </Typography>
                    <Typography>
                        I also interned at <b>Squarepoint Capital</b> this fall as a <b>C++ Software Engineer</b> under the <b>Risk PnL</b> team. 
                        Among other things, I worked on auto-marking logic in C++ to handle missing prices more efficiently and ensure accurate PnL reporting.
                    </Typography>
                    <Typography>
                        I have received return offers from all of my previous internships, and I'm excited to share that I'll be returning to <b>Squarepoint Capital</b> this July as a <b>Graduate C++ Software Engineer</b>.
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


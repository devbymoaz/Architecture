
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://example.com/project1.jpg', // Replace with your image URL
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://example.com/project2.jpg', // Replace with your image URL
    },
    // Add more projects as needed
];

function Project() {
    return (
        <Container>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.imageUrl}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={() => {
                                        // Handle click on "Learn More" button
                                    }}
                                >
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Project;

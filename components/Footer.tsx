import { Box, Link, Typography } from '@iotabots/components'

export default function Album() {

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright ©'}
                <Link
                    href="/"
                    className="link"
                    color="inherit"
                    sx={{ml: 1, mr: 1}}
                >
                    {'iotabots.io'}
                </Link>
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Box sx={{ bgcolor: 'background.paper', px: 2, py: 6 }} component="footer" className='flex-footer'>
            <Typography variant="h6" align="center" gutterBottom>
                {'*BEE* *BOB* *BOO*'}
            </Typography>
            <Typography align="center" color="text.secondary">
                {'Follow us on '}
                <Link
                    href="https://twitter.com/iotabots"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                    color="inherit"
                >
                    {'Twitter'}
                </Link>
            </Typography>
            <Copyright />
        </Box>
    )
}

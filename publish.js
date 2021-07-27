const { clean, publish } = require('gh-pages');
require('dotenv').config();

clean();
publish(
    'dist',
    {
        user: {
            name: 'jamesinaxx',
            email: 'grassojames5@gmail.com',
        },
        message: 'Built and deployed github pages',
        remote: 'origin',
    },
    function (err) {
        if (err === undefined) {
            console.log('Successfully published to Github pages!');
        } else {
            console.error(
                "Failed to publish to Github pages... and here's why \n" + err
            );
            process.exit(1);
        }
    }
);

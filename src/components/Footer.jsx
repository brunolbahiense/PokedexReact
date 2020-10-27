import React from 'react'
import './Footer.css'

export default () =>
        <footer>
            <p>Powered by SmartBit</p>
            <img class="smartbit" src="data:image/jpeg;base64,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XttHd2zB4pVDKw7g1YrwWraM9QKKKKQBRRRQB//U+qaKKKACiiigAqtcXtraY+0SKmegPX8utWa8kv55Lm7kllJyWPXsOw/CtqNLnepnUqcqPU7e7troFreRXx1weR9RVivKtJuJba/haM/eYKR6gnBFeq0VqXI9Apz5kFRTwQ3MTQXCLJG4wysAQR7g1LR05NYmh88+P/ClvoM8d9p/y29wSPLPOxxzgexHT0rzmvVPiX4htNRnh0qyYSLbEtI6nI3njaPXHf615XX1mCc3Ri6m54eIUVUfJse//C2+e40Sazc5+zS/L7K4zj8816bXlHwngZdNvLk9JJVQf8AXP/s1er189jklXlY9XDN+zjcKKKK5DcKKKKAP/9X6pooooAKKKKACuR1Pw21xM1xZsFLnJVumT1wa66irhUcHeJMoqSszltJ8Om0mFzdMGdeVVegPqTWR8Q/EN3ommxRWD+XNdMV3jqqqOceh5HNegVyHjLwx/wAJLpyxQuEuICWjLdDkcqfTPrW9CrF1oyrbGdSDVNqnufOq61rCNvS9nDeokbP86kudf1u7j8q5vZ5E6FWkYg/UZqW/8N65pjlLy0lXBxuCllP0YZFZq2V452rDIT6BTX06VN+8rHjPnWjKtT21tPeXCWtshkkkIVVXkkmum0zwR4k1NwEtWhQ875vkGPx5P4CvbPC/gvT/AA4PPJ8+7YYMpGAvqFHb69TXNicdTpLR3ZrSw05vVWRseHdHTQtHg05TlkGXPq7ct+vA9q26KK+ZlJybk92ezFJKyCiiipGFFFFAH//W+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//1/qmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k="></img>
        </footer>
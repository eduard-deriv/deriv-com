//TODO: this a temporary way to display these svg
import React from 'react'
import PropTypes from 'prop-types'

const MarketSyntheticIcon = ({ dynamic_id }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <linearGradient id={dynamic_id} x1="0%" x2="100%" y1="81.23%" y2="18.77%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0H64V64H0z" />
            <path
                fill={`url(#${dynamic_id})`}
                d="M32.5 8c11.33 0 20.864 7.691 23.666 18.137 4.12.506 6.816 2.21 6.834 5.523 0 4.495-4.59 6.269-10.379 6.189-5.45-.067-9.94-1.233-18.794-4.346-3.068-1.08-3.648-1.28-4.986-1.723-3.814-1.321-7.722-2.383-11.678-3.175-6.2-1.139-9.643-1.097-12.247.91-1.277.991-1.978 2.057-1.978 3.165 0 1.268.68 2.748 1.683 3.784 1.206 1.194 2.574 1.985 4.227 2.447C8.295 36.868 8 34.718 8 32.5c0-.816.04-1.623.118-2.419.625-.128 1.3-.2 2.036-.221-.102.866-.154 1.747-.154 2.64 0 3.008.59 5.878 1.661 8.501h5.36C16.36 38.353 16 35.49 16 32.5c0-.704.022-1.4.066-2.089.355.06.72.125 1.097.194l.879.182c-.028.565-.042 1.136-.042 1.713 0 3.019.387 5.886 1.084 8.501h4.473c-.342-2.516-.537-5.228-.556-8.056L23 32.5l.003-.52c.668.18 1.335.37 1.999.567v.387c.019 2.855.23 5.574.584 8.067h12.828c.173-1.218.311-2.49.41-3.804.683.22 1.335.424 1.964.613-.089 1.092-.204 2.158-.345 3.19h5.473c.156-.583.296-1.18.42-1.787.67.128 1.325.236 1.973.324-.1.495-.21.983-.33 1.464h5.36c.158-.387.305-.779.442-1.175.758-.04 1.49-.132 2.188-.272C52.939 49.647 43.579 57 32.5 57l-.357-.003c-.047.002-.095.003-.143.003-.099 0-.197-.004-.294-.013-10.216-.325-18.852-6.904-22.208-16.033-2.509-.471-4.548-1.506-6.29-3.23C1.88 36.35 1 34.438 1 32.68c0-1.755 1.006-3.283 2.692-4.591 3.225-2.486 7.074-2.533 13.854-1.288 4.063.813 8.06 1.9 11.945 3.246 1.342.443 1.926.646 5.009 1.73 8.649 3.041 12.99 4.169 18.148 4.232 4.816.066 8.414-1.325 8.414-4.345-.01-2.058-1.427-3.146-4.449-3.53.254 1.417.387 2.876.387 4.366 0 .45-.012.899-.036 1.344-.62.078-1.295.125-2.013.15.033-.494.049-.992.049-1.494 0-3.395-.752-6.614-2.098-9.5h-5.309C48.49 25.92 49 29.13 49 32.5c0 .424-.007.846-.022 1.265-.653-.082-1.313-.184-1.991-.309.009-.317.013-.636.013-.956 0-3.408-.493-6.623-1.369-9.5h-5.333c.427 2.76.674 5.776.7 8.94-.641-.195-1.31-.406-2.009-.634v.029l-.003-.147c-.06-2.916-.32-5.68-.724-8.188H25.738c-.19 1.18-.349 2.417-.47 3.7-.65-.192-1.305-.375-1.962-.551.106-1.081.24-2.133.396-3.15H19.37c-.204.672-.388 1.361-.549 2.067-.424-.091-.848-.18-1.274-.265l-.607-.11c.141-.573.297-1.137.467-1.691h-5.308c-.158.338-.307.681-.449 1.028-.76-.038-1.474-.038-2.146.003 3.36-9.122 11.993-15.693 22.202-16.018.098-.009.196-.013.295-.013l.144.003C32.262 8 32.38 8 32.5 8zm5.591 35l-12.182.001c1.228 6.769 3.519 11.473 5.718 11.958.173.016.347.028.52.034 2.268-.2 4.674-4.992 5.944-11.992zm7.216 0h-5.173c-.845 4.84-2.256 8.808-4 11.267 3.922-1.606 7.268-5.74 9.173-11.267zm-21.44 0h-4.174c1.658 4.811 4.408 8.567 7.68 10.518-1.517-2.48-2.743-6.142-3.507-10.518zm-6.279.001h-4.993c2.404 4.546 6.32 8.17 11.078 10.201-2.622-2.47-4.743-6.007-6.085-10.2zm34.817 0H47.41c-1.34 4.193-3.461 7.731-6.083 10.201 4.758-2.031 8.673-5.655 11.077-10.201zM24.36 11.517l-.294.117c-4.578 1.852-8.408 5.168-10.91 9.366h4.94c1.504-3.914 3.71-7.196 6.264-9.483zm3.012-.035l-.203.124c-2.953 1.841-5.466 5.16-7.11 9.394h3.992c.77-3.934 1.922-7.23 3.321-9.518zm4.776-1.475l-.155.007c-.122.007-.244.016-.366.028-2.09.46-4.26 4.729-5.526 10.958h11.798c-1.31-6.453-3.594-10.802-5.751-10.993zm3.986.725l.097.139C37.81 13.164 39.108 16.7 39.949 21h4.992c-1.95-5.024-5.125-8.76-8.807-10.268zm4.506.786l.026.023c2.542 2.286 4.739 5.558 6.238 9.459h4.94c-2.556-4.288-6.496-7.655-11.204-9.482z"
            />
        </g>
    </svg>
)

MarketSyntheticIcon.propTypes = {
    dynamic_id: PropTypes.string,
}
export default MarketSyntheticIcon

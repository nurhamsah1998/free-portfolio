import React from "react";

function FlyGuy({ decrease = 1 }: { decrease?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={623.3521 - decrease}
      height={751.374 - decrease}
      data-name="Layer 1"
      version="1.1"
      viewBox="0 0 623.352 751.374"
    >
      <path
        fill="#ffb6b6"
        d="M490.139 403.405s13.87 14.334 15.102 22.415l-12.067 6.95-13.927-24.406-7.346-32.58a5.533 5.533 0 119.227-2.36z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#ffb6b6"
        d="M618.792 369.035a5.533 5.533 0 119.132 2.701l-8.549 32.285-14.823 23.873-11.8-7.393c1.53-8.03 15.923-21.84 15.923-21.84z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#464646"
        d="M791.711 215.22c-3.53-1.59-7-3.12-10.32-4.53-.5-.21-1-.43-1.5-.64l-.06-.03q-4.485-1.92-8.99-3.76c-2.1-.86-4.19-1.71-6.29-2.54-.82-.34-1.64-.66-2.47-.98-1.33-.53-2.67-1.05-4-1.57-1.1-.43-2.21-.85-3.31-1.27-1.27-.49-2.54-.96-3.8-1.44q-2.25-.84-4.49-1.66a.09.09 0 00-.05-.01c-1.13-.42-2.26-.83-3.38-1.23a623.85 623.85 0 00-45.88-14.57l-1.65-.45-2.85-.78q-2.52-.675-5.06-1.32c-1.59-.42-3.19-.82-4.79-1.22-1.41-.35-2.82-.7-4.24-1.04-1.39-.34-2.78-.67-4.18-.99q-6.255-1.47-12.49-2.78a.276.276 0 00-.09-.01c-1-.22-1.99-.43-2.99-.63a563.985 563.985 0 00-45.89-7.44c-.75-.09-1.5-.18-2.25-.26h-.02c-.13-.02-.27-.03-.4-.04q-1.89-.225-3.78-.42c-1.66-.18-3.31-.35-4.97-.51q-5.895-.585-11.77-1.02c-.99-.08-1.97-.15-2.95-.21-1.13-.09-2.26-.16-3.38-.23q-1.74-.12-3.48-.21c-.44-.03-.87-.05-1.3-.07-.54-.04-1.09-.06-1.63-.09l-2.43-.12c-15.24-.73-30.67-.79-45.87-.18-.84.03-1.68.07-2.53.11h-.03c-.61.03-1.22.05-1.84.08l-.67.03c-1.51.08-3.02.16-4.53.25-1.61.09-3.21.19-4.81.3l-3.01.21-1.99.15c-4.18.32-8.36.69-12.51 1.11-1.39.14-2.77.28-4.15.43-.77.08-1.53.16-2.29.25a540.851 540.851 0 00-45.88 7.21c-1 .2-2.01.41-3.02.62-.02 0-.04.01-.06.01-.15.03-.31.06-.46.1-1.04.21-2.09.43-3.13.66-1.15.24-2.29.49-3.44.74-.96.21-1.92.43-2.88.65-2.26.51-4.53 1.03-6.79 1.58q-6.9 1.65-13.79 3.49c-1.04.28-2.09.56-3.14.85a.031.031 0 00-.02.01c-.54.14-1.09.29-1.63.44-15.2 4.18-30.63 9.12-45.87 14.7-1.12.41-2.24.82-3.37 1.25a.235.235 0 00-.08.02q-4.545 1.695-9.14 3.48c-1.11.44-2.23.88-3.35 1.32-1.08.43-2.17.86-3.25 1.3-.95.38-1.89.76-2.84 1.15-.76.31-1.51.62-2.27.93q-3.9 1.62-7.79 3.28c-1.57.68-3.15 1.36-4.72 2.05-.51.22-1.03.44-1.54.67a634.83 634.83 0 00-10.52 4.75 20.337 20.337 0 00-11.8 18.4v35.29a20.237 20.237 0 0025.93 19.42c1.49-.44 2.98-.88 4.48-1.32 1.25-.37 2.51-.73 3.76-1.09l4.1-1.17c3.13-.87 6.28-1.74 9.43-2.58l4.41-1.17c2.31-.61 4.62-1.2 6.93-1.79l1.92-.48a834.78 834.78 0 0130.17-6.98c1.03-.22 2.06-.43 3.08-.64q6.315-1.32 12.56-2.5l3-.57h.03c.98-.19 1.96-.37 2.94-.55q4.11-.75 8.27-1.46c1.59-.28 3.19-.55 4.79-.81.16-.03.32-.06.48-.08q4.14-.69 8.3-1.33c1.88-.29 3.77-.58 5.66-.85 1.61-.24 3.22-.47 4.83-.7 15.26-2.14 30.67-3.85 45.81-5.05 1.31-.11 2.62-.21 3.93-.31 5.08-.38 10.2-.72 15.33-1 6.34-.34 12.7-.61 19.03-.8 15.2-.47 30.61-.47 45.8 0 6.34.19 12.7.46 19.04.8 5.13.28 10.25.62 15.33 1 1.31.1 2.62.2 3.93.31 15.13 1.2 30.54 2.9 45.82 5.05.73.1 1.45.21 2.18.31.26.04.51.07.77.11 1.11.16 2.22.33 3.33.49q6.255.93 12.5 1.97c1.07.17 2.14.35 3.2.53q3.435.585 6.84 1.19c1.32.24 2.63.48 3.94.72.83.15 1.67.3 2.5.46 1.01.19 2.02.38 3.02.57 1.65.31 3.3.63 4.96.96 1.04.21 2.09.41 3.14.63 11.19 2.25 22.49 4.78 33.74 7.54l3.51.87.47.12c1.21.3 2.42.61 3.63.92q2.595.66 5.2 1.35 2.205.57 4.41 1.17c4.54 1.21 9.08 2.47 13.59 3.76q4.125 1.185 8.21 2.4h.02a19.759 19.759 0 003.32.68 19.335 19.335 0 002.4.15 20.222 20.222 0 0020.18-20.25v-35.13a20.319 20.319 0 00-12.01-18.49z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M359.591 196.57a3.025 3.025 0 00-2.72-.37.235.235 0 00-.08.02q-4.545 1.695-9.14 3.48c-1.11.44-2.23.88-3.35 1.32-1.08.43-2.17.86-3.25 1.3-.95.38-1.89.76-2.84 1.15-.76.31-1.51.62-2.27.93q-3.9 1.62-7.79 3.28c-1.57.68-3.15 1.36-4.72 2.05a3.064 3.064 0 00-1.84 2.81v72.77a3.055 3.055 0 001.24 2.47 3.262 3.262 0 00.8.43 3.002 3.002 0 001.87.04l4.47-1.32 3.75-1.08c1.37-.39 2.74-.78 4.12-1.17 3.13-.87 6.28-1.74 9.43-2.58q2.205-.6 4.41-1.17c2.31-.61 4.62-1.2 6.93-1.79a3.094 3.094 0 001.49-.88l.01-.01a3.066 3.066 0 00.8-2.06v-77.1a3.061 3.061 0 00-1.32-2.52z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M443.931 172.35a3 3 0 00-2.48-.63c-.02 0-.04.01-.06.01-.15.03-.31.06-.46.1-1.04.21-2.09.43-3.13.66-1.15.24-2.29.49-3.44.74-.96.21-1.92.43-2.88.65-2.26.51-4.53 1.03-6.79 1.58q-6.915 1.65-13.79 3.49c-.96.25-1.93.51-2.89.77a2.41 2.41 0 00-.25.08.031.031 0 00-.02.01 3.079 3.079 0 00-1.99 2.87v82.29a3.045 3.045 0 001.1 2.35 2.9 2.9 0 00.79.47 3.076 3.076 0 001.16.23 3.285 3.285 0 00.54-.05h.03c.98-.19 1.96-.37 2.94-.55q4.11-.75 8.27-1.46c1.59-.28 3.19-.55 4.79-.81.16-.03.32-.06.48-.08q4.14-.69 8.3-1.33c1.88-.29 3.77-.58 5.66-.85.88-.14 1.76-.26 2.64-.39a2.994 2.994 0 001.57-.72 3.065 3.065 0 001.05-2.3v-84.75a3.05 3.05 0 00-1.14-2.38z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M528.281 161.93a3.09 3.09 0 00-2.1-.85h-.15c-.57.03-1.15.05-1.72.08l-.67.03c-1.51.08-3.02.16-4.53.25-1.61.09-3.21.19-4.81.3l-3.01.21-1.99.15c-4.18.32-8.36.69-12.51 1.11-1.39.14-2.77.28-4.15.43a3.058 3.058 0 00-2.73 3.05v87.19a3.014 3.014 0 00.98 2.23 2.968 2.968 0 00.62.45 3.073 3.073 0 001.46.37c.07 0 .15-.01.23-.01l1.18-.09c5.08-.38 10.2-.72 15.33-1 5.53-.31 11.06-.55 16.56-.73a2.96 2.96 0 001.66-.54 3.047 3.047 0 001.3-2.51v-87.9a3.039 3.039 0 00-.95-2.22z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M610.691 164.07h-.02c-.13-.02-.27-.03-.4-.04q-1.89-.225-3.78-.42c-1.66-.18-3.31-.35-4.97-.51q-5.895-.585-11.77-1.02c-.99-.08-1.97-.15-2.95-.21-1.13-.09-2.26-.16-3.38-.23q-1.74-.12-3.48-.21c-.44-.03-.87-.05-1.3-.07-.46-.03-.91-.06-1.36-.08a2.435 2.435 0 00-.27-.01 2.99 2.99 0 00-1.99.84 3.049 3.049 0 00-.96 2.23v87.71a3.03 3.03 0 001.31 2.51 2.93 2.93 0 001.65.54c5.5.18 11.03.42 16.56.73 5.13.28 10.25.62 15.33 1l1.18.09c.08 0 .15.01.23.01a3.074 3.074 0 001.46-.37 2.97 2.97 0 00.62-.45 3.051 3.051 0 00.98-2.23v-86.77a3.074 3.074 0 00-2.69-3.04z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M695.521 180.54a2.266 2.266 0 00-.24-.08c-.87-.24-1.74-.47-2.61-.7q-2.52-.675-5.06-1.32c-1.59-.42-3.19-.82-4.79-1.22-1.41-.35-2.82-.7-4.24-1.04-1.39-.34-2.78-.67-4.18-.99q-6.255-1.47-12.49-2.78a.276.276 0 00-.09-.01 3.009 3.009 0 00-2.46.63 3.05 3.05 0 00-1.14 2.38v84.07a3.04 3.04 0 001.06 2.3 2.962 2.962 0 001.56.72c.26.04.51.07.77.11 1.11.16 2.22.32 3.33.49q6.255.93 12.5 1.97c1.07.17 2.14.35 3.2.53q3.435.585 6.84 1.19c1.32.24 2.63.48 3.94.72.83.15 1.67.3 2.5.46a3.654 3.654 0 00.57.05 3.038 3.038 0 001.16-.23 2.757 2.757 0 00.79-.47 3.045 3.045 0 001.1-2.35v-81.55a3.071 3.071 0 00-2.02-2.88z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M779.891 210.05l-.06-.03q-4.485-1.92-8.99-3.76c-2.1-.86-4.19-1.71-6.29-2.54-.82-.34-1.64-.66-2.47-.98-1.33-.53-2.67-1.05-4-1.57-1.1-.43-2.21-.85-3.31-1.27-1.27-.49-2.54-.96-3.8-1.44q-2.25-.84-4.49-1.66a.09.09 0 00-.05-.01 2.975 2.975 0 00-2.74.38 3.06 3.06 0 00-1.31 2.51v76.51a3.038 3.038 0 00.57 1.77 3.252 3.252 0 00.23.29l.01.01a3.05 3.05 0 001.49.88c.57.14 1.14.29 1.71.44q2.595.66 5.2 1.35 2.205.57 4.41 1.17c4.54 1.21 9.08 2.47 13.59 3.76q4.125 1.185 8.21 2.4h.02a3.117 3.117 0 00.85.12 3.028 3.028 0 00.99-.17 2.958 2.958 0 00.8-.43 3.074 3.074 0 001.23-2.47v-72.47a3.052 3.052 0 00-1.8-2.79z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M330.048 286.99c13.023 8.774 26.62 16.664 40.322 24.319 14.66 8.189 29.471 16.1 44.132 24.283 14.75 8.234 29.37 16.733 43.472 26.042a300 300 0 0138.766 29.842c11.448 10.597 21.817 22.438 29.968 35.774q1.458 2.385 2.819 4.828c.94 1.686 3.533.175 2.59-1.514a164.392 164.392 0 00-28.703-36.871 279.405 279.405 0 00-38.146-30.765c-14.01-9.59-28.615-18.28-43.388-26.633-14.73-8.328-29.651-16.311-44.459-24.5-13.939-7.709-27.808-15.586-41.16-24.282q-2.361-1.539-4.699-3.114c-1.605-1.082-3.108 1.516-1.514 2.59z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M380.663 251.785a224.84 224.84 0 0022.877 39.938 468.642 468.642 0 0029.425 36.929c10.425 12.01 21.163 23.745 31.665 35.689 10.381 11.808 20.56 23.825 29.856 36.516a239.725 239.725 0 0123.924 39.455q1.213 2.583 2.346 5.203c.766 1.767 3.351.241 2.59-1.514a224.84 224.84 0 00-22.876-39.938 468.64 468.64 0 00-29.425-36.929c-10.425-12.01-21.163-23.745-31.665-35.69-10.381-11.807-20.56-23.824-29.856-36.515a239.724 239.724 0 01-23.923-39.455q-1.214-2.583-2.347-5.203c-.766-1.767-3.351-.241-2.59 1.514z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M747.381 269.674a376.868 376.868 0 01-36.28 30.5c-13.2 9.936-26.758 19.382-40.25 28.915-13.468 9.517-26.89 19.118-39.823 29.358a309.172 309.172 0 00-35.056 31.776c-10.132 10.924-19.213 22.955-26.02 36.244q-1.228 2.397-2.354 4.843c-.803 1.742 1.782 3.268 2.59 1.515a152.14 152.14 0 0124.48-36.698 283.354 283.354 0 0134.115-32.059c12.713-10.32 25.992-19.92 39.344-29.389 13.502-9.575 27.109-19.006 40.406-28.865a424.364 424.364 0 0036.876-30.12q2.067-1.928 4.094-3.898c1.387-1.348-.736-3.468-2.122-2.122z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#3f3d56"
        d="M716.461 242.06a224.84 224.84 0 01-22.876 39.937 464.743 464.743 0 01-29.459 36.901c-10.436 12.002-21.175 23.736-31.669 35.687-10.374 11.816-20.523 23.855-29.818 36.546a239.726 239.726 0 00-23.924 39.455q-1.214 2.584-2.346 5.203c-.76 1.754 1.824 3.283 2.59 1.515a224.84 224.84 0 0122.876-39.938 464.745 464.745 0 0129.46-36.901c10.435-12.002 21.175-23.736 31.668-35.688 10.375-11.815 20.523-23.854 29.819-36.545a239.724 239.724 0 0023.923-39.456q1.214-2.583 2.347-5.202c.76-1.754-1.824-3.283-2.59-1.515z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#ffb6b6"
        d="M206.669 548.641L208.56 555.2 234.762 551.029 231.971 541.347 206.669 548.641z"
      ></path>
      <path
        fill="#2f2e41"
        d="M488.084 624.694l5.814 20.172.255-.073a8.172 8.172 0 005.589-10.114l1.733-4.491-4.777-6.07-.507-1.76z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#ffb6b6"
        d="M319.171 580.861L325.832 579.364 323.228 552.96 313.397 555.17 319.171 580.861z"
      ></path>
      <path
        fill="#2f2e41"
        d="M606.88 662.654l20.482-4.603-.058-.259a8.172 8.172 0 00-9.764-6.18l-4.38-1.998-6.342 4.407-1.788.402z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#2f2e41"
        d="M587.108 513.76l30.161 123.76-14.753 1.307-16.348-41.419-25.235-48.749 2.281 55.642-46.95 27.457-11.032-15.114 37.532-20.187-16.395-73.637 4.364-9.06z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M526.678 524.597c-4.89-6.845 4.156-18.115 5.265-20.5a5.987 5.987 0 01-4.098-6.394l.479-4.064.498-3.986-3.57-3.57-.01-.09-2.055-17.978-2.988-11.942a26.216 26.216 0 017.441-25.406l6.906-1.097 8.392-8.086h13.534l4.64 4.434c8.663 1.519 10.151 1.023 17.592 9.952l-3.381 27.761-.843 3.82.002 5.179 2.144 2.383a7.416 7.416 0 011.76 6.415l-.282 1.41c2.211.948 4.322 17.792 4.826 20.145l.753 3.514c.644.85 4.897 6.521 4.897 8.072 0 .232-.171.457-.54.707-2.899 1.963-28.271 7.158-35.362 4.321-7.553-3.02-26 5-26 5z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M499.558 442.226l5.951 7.278a26.84 26.84 0 0018.179 9.724 11.75 11.75 0 0011.099-5.535 11.722 11.722 0 00-3.273-15.667c-7.371-5.182-11.393-13.21-17.188-10.607l-1.247-3.062-16.34-13.203-13.393 11.492z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M614.749 418.142l-12.957-11.981-10.106 6.435-1.36 3.014c-5.694-2.817-16.724 11.21-24.283 16.114a11.722 11.722 0 00-3.851 15.535 11.75 11.75 0 0010.886 5.943 26.84 26.84 0 0018.527-9.043l6.216-7.052z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <circle cx="260.468" cy="328.235" r="15.03" fill="#ffb6b6"></circle>
      <path
        fill="#2f2e41"
        d="M537.884 413.142c-.131-.116-.255-.238-.383-.357-.005.012-.005.025-.01.037z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#2f2e41"
        d="M562.901 396.91c-.08-.05-.15-.1-.23-.14a5.472 5.472 0 00-3.47-1.17c-1.2.15-2.19 1.01-3.34 1.35-2.47.72-4.96-1.04-7.52-1.22h-.06a6.222 6.222 0 00-6.6 5.82c-.05.83.06 1.66-.04 2.48a2.54 2.54 0 01-1.26 2.03c-1.13.51-2.65-.25-3.61.54-.85.71-.54 2.09-.03 3.08a4.501 4.501 0 01.83 2.87 2.17 2.17 0 01-.07.24 22.612 22.612 0 01-7.2-16.89 8.916 8.916 0 01.84-4.04 4.217 4.217 0 013.21-2.37c1.18-.1 2.4.43 3.52.05 1.38-.46 1.96-2.05 2.68-3.33a9.62 9.62 0 018.8-4.77 19.073 19.073 0 013.74.75l2.38.65a12.852 12.852 0 012.63.93 8.56 8.56 0 013.01 2.91 12.947 12.947 0 011.49 3.12 22.658 22.658 0 01-3.95-.14c1.5.93 3.01 1.86 4.51 2.79a12.685 12.685 0 01-.26 4.46z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <g opacity="0.2">
        <path
          d="M288.324 272.364c.295-.391.605-.767.906-1.153l.016-.153z"
          transform="translate(-288.324 -74.313)"
        ></path>
        <path
          d="M801.688 276.487a19.748 19.748 0 01-20.49 11.96 20.086 20.086 0 01-3.26-.67q-17.535-5.22-35.06-9.6-22.92-5.76-45.84-10.13-19.155-3.66-38.31-6.35-22.935-3.225-45.85-5.06-19.155-1.545-38.32-2.11-22.92-.705-45.83 0-19.155.57-38.32 2.11-22.92 1.83-45.84 5.06-19.155 2.7-38.32 6.35-22.92 4.365-45.84 10.13-17.535 4.395-35.05 9.6a20.086 20.086 0 01-3.26.67 19.736 19.736 0 01-22.03-19.61v-9.24c22.55-20.39 54.45-29.84 85.21-33.06 36.58-3.83 73.75-.56 110.13-5.99 29.66-4.43 59.13-14.64 88.91-11.09 25.95 3.08 49.6 16.38 75.19 21.7 32.1 6.67 65.99.54 97.8 8.47 12.47 3.1 24.69 8.55 33.6 17.8a43.424 43.424 0 0110.78 19.06z"
          transform="translate(-288.324 -74.313)"
        ></path>
      </g>
      <circle cx="262.126" cy="391.497" r="19.213" fill="#464646"></circle>
      <path
        fill="#fff"
        d="M547.829 475.809a2.137 2.137 0 01-1.71-.855l-5.241-6.989a2.137 2.137 0 113.42-2.564l3.428 4.572 8.808-13.211a2.137 2.137 0 113.556 2.37l-10.483 15.725a2.138 2.138 0 01-1.719.951z"
        transform="translate(-288.324 -74.313)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M563.946 421.099c-.71-2.091-3.453-2.487-5.662-2.48q-7.386.022-14.755.628l.492-.569a7.338 7.338 0 00-4.137-.464c-1.355.385-2.468 1.94-1.856 3.209.46.953 1.745 1.558 1.652 2.612-.156 1.784-3.609 1.19-4.146 2.9a1.681 1.681 0 00.757 1.785 4.557 4.557 0 001.961.621 40.414 40.414 0 0021.567-2.78 9.02 9.02 0 003.183-1.988 3.595 3.595 0 00.944-3.474z"
        transform="translate(-288.324 -74.313)"
      ></path>
    </svg>
  );
}

export default FlyGuy;

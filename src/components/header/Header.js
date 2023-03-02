import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          <a href="#">
            <svg
              data-v-ebec2298=""
              version="1.1"
              viewBox="0 0 136 45"
              class="gncc-logo svg-icon svg-fill"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#00A0DF">
                  <path
                    pid="0"
                    d="M29.04 11.22v6.19c0 1.04.45 2.02 1.22 2.71l6.71 5.92c4.99 4.4 1.88 12.64-4.78 12.64H18.08c-6.65 0-9.77-8.24-4.78-12.64l6.71-5.92c.78-.69 1.22-1.67 1.22-2.71v-6.19c0-1.33-.74-2.56-1.91-3.19L6.27 1.08C3.86-.2.96 1.54.96 4.27v37.02c0 1.99 1.62 3.61 3.61 3.61H45.7c1.99 0 3.61-1.62 3.61-3.61V4.27c0-2.73-2.9-4.47-5.31-3.19L30.95 8.03a3.616 3.616 0 00-1.91 3.19z"
                  ></path>
                  <path pid="1" d="M22.53 25.09l8.17 4.72-8.17 4.72z"></path>
                </g>
                <g fill="#24272A">
                  <path
                    pid="2"
                    fill-rule="nonzero"
                    d="M68.96 5.19c.93.47 1.63 1.1 2.12 1.87.49.78.73 1.62.73 2.51v6.53c0 1.02-.24 1.93-.73 2.73s-1.21 1.44-2.16 1.91c-.96.47-2.11.71-3.47.71-1.33 0-2.47-.25-3.44-.76-.96-.51-1.7-1.17-2.2-1.99-.5-.82-.75-1.67-.75-2.57 0-.91.2-1.76.59-2.56.39-.79 1.01-1.44 1.86-1.94.85-.5 1.92-.75 3.22-.75h3.49V9.63c0-.72-.25-1.28-.74-1.65-.49-.38-1.11-.57-1.85-.57-.71 0-1.31.17-1.79.5-.49.33-.73.83-.73 1.49v.19h-3.59V9.4c0-.82.25-1.6.74-2.36.49-.76 1.21-1.37 2.14-1.84.93-.47 2.02-.71 3.25-.71 1.28-.01 2.38.23 3.31.7zm-.74 8.57h-3.08c-.79 0-1.4.21-1.84.62-.44.42-.66 1.01-.66 1.78 0 .79.26 1.38.78 1.77.52.39 1.18.59 2 .59.8 0 1.47-.19 2-.58.53-.39.8-1.02.8-1.9v-2.28z"
                  ></path>
                  <path
                    pid="3"
                    d="M83.44 5.11c.96.42 1.71 1.03 2.26 1.83.55.8.82 1.76.82 2.87v6.06c0 1.17-.27 2.17-.82 3.01-.55.83-1.31 1.47-2.29 1.91-.98.44-2.09.66-3.34.66-1.23 0-2.34-.22-3.31-.66-.97-.44-1.73-1.08-2.28-1.91-.55-.83-.82-1.84-.82-3.01v-1.69h3.59v1.36c0 .88.24 1.57.71 2.06s1.2.74 2.19.74c.91 0 1.6-.25 2.08-.75s.72-1.18.72-2.05v-5.41c0-.77-.24-1.39-.71-1.85-.47-.46-1.13-.69-1.98-.69-.93 0-1.62.23-2.08.68-.46.45-.69 1.08-.69 1.86v.67H73.9v-1c0-1.11.27-2.07.82-2.87.55-.8 1.3-1.41 2.24-1.83.95-.42 2.02-.62 3.23-.62s2.3.21 3.25.63z"
                  ></path>
                  <path
                    pid="4"
                    fill-rule="nonzero"
                    d="M104.6 5.15c.79.45 1.38 1.03 1.76 1.75.38.72.57 1.5.57 2.35v1.53c0 .83-.2 1.61-.61 2.34-.41.73-1.03 1.31-1.87 1.76-.84.45-1.86.67-3.07.67-1.16 0-2.16-.22-3-.67-.84-.45-1.48-1.04-1.92-1.77-.44-.73-.66-1.51-.66-2.33V9.39c0-.65-.17-1.14-.51-1.48-.34-.34-.79-.51-1.34-.51-.51 0-.95.17-1.32.52-.37.35-.56.84-.56 1.47v2.38c0 1.54.52 2.74 1.57 3.6 1.05.86 2.31 1.42 3.79 1.68l6.57 1.13v3.26l-4.97-.86c-.74-.14-1.77-.26-3.09-.36-1.32-.1-2.63-.15-3.92-.15-.8 0-1.57.02-2.31.07v-2.57h2.13c-1.17-.6-2.02-1.41-2.56-2.42-.53-1.01-.8-2.08-.8-3.2V9.27c0-.83.19-1.62.58-2.35.39-.73.97-1.32 1.76-1.77.79-.45 1.75-.67 2.89-.67.88 0 1.64.13 2.29.39.65.26 1.17.74 1.57 1.43.83-1.22 2.18-1.83 4.03-1.83 1.21.01 2.21.24 3 .68zm-1.26 4.26c0-.63-.18-1.13-.54-1.48-.36-.35-.84-.53-1.42-.53-.57 0-1.05.18-1.42.53-.38.36-.57.85-.57 1.48v1.23c0 .62.19 1.1.58 1.46.39.35.86.53 1.41.53.6 0 1.08-.17 1.43-.52.35-.35.53-.84.53-1.47V9.41z"
                  ></path>
                  <path
                    pid="5"
                    d="M118.3 5.14c.96.44 1.72 1.08 2.27 1.91.55.83.82 1.84.82 3.01v11.18h-3.59V10.39c0-.86-.24-1.55-.71-2.05-.47-.5-1.14-.75-2-.75-.93 0-1.62.25-2.07.74-.46.49-.68 1.18-.68 2.06v10.85h-3.59V10.06c0-1.16.27-2.16.82-3 .55-.84 1.3-1.48 2.24-1.92.95-.44 2.02-.66 3.2-.66 1.24 0 2.33.22 3.29.66zm12.53.34c0 .45.12.85.36 1.21s.57.75 1.01 1.17l1.94 1.87c1.11 1.06 1.67 2.45 1.67 4.17v1.97c0 1.17-.27 2.17-.82 3.01-.55.83-1.3 1.47-2.27 1.91-.96.44-2.06.66-3.3.66-1.2 0-2.28-.22-3.23-.66-.95-.44-1.7-1.08-2.24-1.92-.55-.84-.82-1.84-.82-3v-2.61h3.59v2.29c0 .88.23 1.57.69 2.06.46.49 1.16.74 2.08.74.91 0 1.59-.25 2.05-.74.45-.49.68-1.18.68-2.06v-1.36c0-1-.4-1.88-1.2-2.64l-1.87-1.8c-1.27-1.2-1.9-2.5-1.9-3.89V4.75h3.59v.73h-.01zM82.37 26.82c.76.45 1.32 1.03 1.68 1.75.35.72.53 1.5.53 2.35v4.47h-3.59v-4.42c0-.62-.17-1.09-.51-1.41-.34-.32-.79-.49-1.34-.49-.51 0-.95.17-1.32.5-.37.33-.56.8-.56 1.4v3.8h-3.59v-3.8c0-.6-.17-1.07-.5-1.4-.33-.33-.77-.5-1.31-.5-.51 0-.93.17-1.27.5-.34.33-.51.8-.51 1.4v3.8h-3.59v-3.8c0-.62-.17-1.09-.51-1.41-.34-.32-.79-.49-1.34-.49-.51 0-.95.17-1.32.5-.37.33-.56.8-.56 1.4v2.24c0 1.65.66 2.87 1.97 3.66s3.06 1.34 5.25 1.67l9.81 1.39v3.19l-7.75-1.13c-2.04-.31-4.04-.46-6.02-.46-1.56 0-3.2.1-4.93.3v-2.57h2.5c-.94-.34-1.74-.82-2.41-1.45-.66-.62-1.16-1.3-1.5-2.04-.34-.73-.51-1.45-.51-2.14v-2.71c0-.85.17-1.63.52-2.35.35-.72.91-1.3 1.68-1.75.77-.45 1.74-.67 2.92-.67.89 0 1.68.14 2.36.42.68.28 1.22.78 1.62 1.5.32-.65.8-1.13 1.42-1.45.62-.32 1.35-.47 2.16-.47.85 0 1.59.17 2.22.5.63.33 1.09.81 1.37 1.42.42-.72.96-1.23 1.64-1.5.68-.28 1.47-.42 2.36-.42 1.2 0 2.17.22 2.93.67zm10.93.32c0 .45.12.85.36 1.21s.57.75 1.01 1.17l1.94 1.87c1.11 1.06 1.67 2.45 1.67 4.16v1.97c0 1.17-.27 2.17-.82 3.01-.55.83-1.3 1.47-2.27 1.91-.96.44-2.06.66-3.3.66-1.2 0-2.28-.22-3.23-.66-.95-.44-1.7-1.08-2.24-1.92-.55-.84-.82-1.84-.82-3v-2.61h3.59v2.29c0 .88.23 1.57.69 2.06.46.49 1.16.74 2.08.74.91 0 1.59-.25 2.05-.74.45-.49.68-1.18.68-2.06v-1.37c0-1-.4-1.88-1.2-2.64l-1.87-1.8c-1.26-1.2-1.9-2.5-1.9-3.89v-1.11h3.59v.75h-.01z"
                  ></path>
                  <path
                    pid="6"
                    fill-rule="nonzero"
                    d="M112.06 34.45c.69.9 1.03 1.95 1.03 3.17 0 1.03-.25 1.97-.74 2.8-.49.83-1.22 1.49-2.19 1.97-.96.48-2.12.72-3.46.72-1.34 0-2.5-.24-3.46-.72s-1.69-1.13-2.19-1.97c-.49-.83-.74-1.77-.74-2.8 0-1.42.45-2.61 1.37-3.58.91-.96 2.2-1.54 3.86-1.72v-1.41l-1.57-.49c-.74-.23-1.33-.65-1.77-1.25a3.4 3.4 0 01-.66-2.06v-.72h3.59v.28c0 .4.12.72.35.95.23.23.57.41 1.02.53l2.64.76v3.63c1.25.39 2.23 1.02 2.92 1.91zm-3.36 5.08c.53-.44.8-1.07.8-1.91 0-.83-.27-1.47-.8-1.91-.53-.44-1.2-.66-2-.66s-1.47.22-2 .66c-.53.44-.8 1.08-.8 1.91 0 .83.27 1.47.8 1.91.53.44 1.2.66 2 .66s1.47-.22 2-.66z"
                  ></path>
                  <path
                    pid="7"
                    d="M124.92 26.81c.96.44 1.72 1.08 2.27 1.91.55.83.82 1.84.82 3.01v11.18h-3.59V32.06c0-.86-.24-1.55-.71-2.05-.47-.5-1.14-.75-2-.75-.93 0-1.62.25-2.07.74-.46.49-.68 1.18-.68 2.06v10.85h-3.59V31.73c0-1.16.27-2.16.82-3 .55-.84 1.3-1.48 2.24-1.92.95-.44 2.02-.66 3.2-.66 1.24 0 2.33.22 3.29.66z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">მთავარი</a>
          </li>
          <li>
            <a href="#">ჩვენ შესახებ</a>
          </li>
          <li>
            <a href="#">სერვისები</a>
          </li>
          <li>
            <a href="#">სიახლეები</a>
          </li>
          <li>
            <a href="#">კონტაქტი</a>
          </li>
        </ul>
        <button className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;

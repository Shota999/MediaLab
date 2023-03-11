import { Link } from "react-router-dom";
import "./footer.scss";

function Nav({ title , path}) {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  );
};

const Footer = ({ menu }) => {
  const footerMenu = [
    { title: "About US", path: "/about" },
    { title: "contact", path: "/contact" },
  ];
  return (
    <footer>
      <div className="left">
        <ul className="partners">
          <li>
            <a href="#">
              <svg
                data-v-6c0f25cf=""
                version="1.1"
                viewBox="0 0 48 45"
                className="svg-icon svg-fill"
              >
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(0 -.568)">
                    <path
                      pid="1"
                      fill="#040201"
                      d="M27.808 12.651L39.31 38.59h-7.956l-1.357-3.026c-1.23-2.746-3.759-4.119-6.287-4.119-2.529 0-5.057 1.373-6.288 4.12l-1.356 3.025H8.109l11.502-25.938c.77-1.734.085-3.779-1.561-4.675L5.208.997C2.848-.286 0 1.458 0 4.184v37.024c0 1.994 1.586 3.611 3.542 3.611h40.336c1.955 0 3.541-1.617 3.541-3.61V4.183c0-2.726-2.849-4.47-5.208-3.187L29.37 7.977c-1.648.895-2.33 2.941-1.562 4.674"
                    ></path>
                  </g>
                  <path
                    pid="2"
                    fill="#040201"
                    d="M23.71 17.307l-3.982 8.98h7.963z"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                data-v-6c0f25cf=""
                version="1.1"
                viewBox="0 0 47 45"
                className="svg-icon svg-fill"
              >
                <path
                  pid="0"
                  fill="#FFB71B"
                  fillRule="evenodd"
                  d="M27.597 14.155l8.321 7.088v17.431h-8.564V28.21h-7.708v10.464h-8.564v-17.43l8.32-7.089c1.945-1.658 1.653-4.851-.563-6.092L5.162.436C2.819-.866 0 .904 0 3.68v37.65C0 43.352 1.575 45 3.51 45h39.98c1.935 0 3.51-1.648 3.51-3.671V3.68C47 .904 44.181-.866 41.838.436L28.161 8.063c-2.216 1.241-2.508 4.434-.564 6.092z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                data-v-6c0f25cf=""
                version="1.1"
                viewBox="0 0 49 45"
                className="svg-icon svg-fill"
              >
                <g fill="#00A0DF" fillRule="evenodd">
                  <path
                    pid="0"
                    d="M28.48 11.22v6.19c0 1.04.442 2.02 1.197 2.71l6.581 5.92c4.894 4.4 1.844 12.64-4.688 12.64H17.732c-6.522 0-9.582-8.24-4.688-12.64l6.58-5.92a3.635 3.635 0 001.197-2.71v-6.19c0-1.33-.726-2.56-1.873-3.19L6.149 1.08C3.786-.2.942 1.54.942 4.27v37.02c0 1.99 1.588 3.61 3.54 3.61H44.82c1.952 0 3.54-1.62 3.54-3.61V4.27c0-2.73-2.844-4.47-5.207-3.19L30.354 8.03a3.627 3.627 0 00-1.873 3.19z"
                  ></path>
                  <path pid="1" d="M22.096 25.09l8.013 4.72-8.013 4.72z"></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                data-v-6c0f25cf=""
                version="1.1"
                viewBox="0 0 49 45"
                className="svg-icon svg-fill"
              >
                <g fill="#FF4438" fillRule="evenodd">
                  <path
                    pid="0"
                    d="M24.646 40.8h-.804c-2.109-7.97-7.061-14.75-13.681-19.14l6.296-4.6c3.766-2.76 3.393-8.59-.706-10.82L6.139 1.02C3.776-.26.932 1.48.932 4.21v37.02c0 1.99 1.589 3.61 3.54 3.61H44.81c1.952 0 3.54-1.62 3.54-3.61V4.21c0-2.73-2.843-4.47-5.207-3.19l-9.611 5.22c-4.09 2.23-4.473 8.06-.706 10.82l6.296 4.6c-6.62 4.39-11.573 11.17-13.681 19.14h-.795z"
                  ></path>
                  <path
                    pid="1"
                    d="M28.167 22.41c0 1.99-1.579 3.61-3.52 3.61-1.943 0-3.522-1.62-3.522-3.61 0-1.99 1.58-3.61 3.521-3.61 1.942 0 3.521 1.61 3.521 3.61"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="top">
          <a href="#">
            <svg
              data-v-6c0f25cf=""
              version="1.1"
              viewBox="0 0 209 50"
              className="svg-icon svg-fill"
            >
              <g fill="none" fillRule="nonzero">
                <path
                  fill="#414042"
                  d="M65.668 9.688C66.13 9.212 66.747 9 67.569 9h1.182c.462 0 .874.053 1.182.159.308.105.616.317.873.581l.72.794.668-.74c.257-.318.565-.53.873-.635.308-.106.72-.159 1.182-.159h1.182c.822 0 1.49.212 1.901.688.462.475.668 1.11.668 2.01V20h-1.439v-8.303c0-.952-.462-1.375-1.336-1.375h-1.027c-.309 0-.566.053-.771.106-.206.106-.36.211-.514.423l-.72.793v5.712h-1.438v-5.712l-.72-.846a1.05 1.05 0 0 0-.513-.37c-.206-.053-.411-.106-.72-.106h-1.027c-.925 0-1.336.476-1.336 1.375V20H65v-8.303c0-.899.206-1.534.668-2.01M81.745 20.224c-.447-.465-.646-1.086-.646-1.914v-5.586c0-.827.2-1.5.646-1.914.448-.465 1.044-.672 1.839-.672h1.49c.348 0 .646.052.845.103.199.052.447.207.696.362l1.043.725v-3c0-.362-.099-.673-.347-.828-.249-.207-.597-.31-1.044-.31h-2.534c-.447 0-.795.103-1.044.31-.248.207-.347.466-.347.828v.775H81v-.672c0-.776.248-1.397.696-1.81.447-.414 1.143-.621 1.987-.621h2.584c.894 0 1.54.207 2.037.62.448.414.696 1.035.696 1.811v9.724c0 .931-.248 1.655-.696 2.12-.447.466-1.143.725-2.037.725h-2.733c-.745-.103-1.341-.31-1.789-.776m5.566-.93c.248-.26.347-.622.347-1.035v-5.587l-1.39-.93c-.25-.156-.398-.26-.548-.311-.149-.052-.347-.052-.645-.052h-1.342c-.447 0-.745.104-.994.362-.248.259-.348.57-.348 1.035v5.586c0 .466.1.776.348 1.035.249.258.547.362.994.362h2.534c.497-.104.795-.207 1.044-.466M99.353 10.625c.431.416.647.936.647 1.56v8.953c0 .936-.27 1.665-.754 2.133-.486.469-1.24.729-2.21.729h-2.964c-.862 0-1.563-.208-1.994-.677-.485-.468-.7-1.093-.7-1.925v-2.759h1.508v2.759c0 .468.108.78.377 1.04.27.26.593.365 1.078.365h2.749c.485 0 .862-.104 1.078-.364.27-.26.377-.625.377-1.041v-9.16c0-.26-.108-.468-.27-.677-.215-.208-.43-.312-.646-.312h-.863a2.18 2.18 0 0 0-.7.104c-.162.052-.323.208-.54.417l-.43.468v3.851h-1.51v-3.851l-.43-.468c-.216-.209-.378-.365-.485-.417a2.18 2.18 0 0 0-.7-.104H91V10h.916c.485 0 .862.052 1.078.104.27.104.539.26.808.573l.485.52.485-.468c.27-.313.593-.469.863-.573.27-.104.646-.104 1.131-.104h1.024c.593-.052 1.132.156 1.563.573M103.704 19.31c-.452-.471-.704-1.205-.704-2.149V7.306c0-.786.252-1.362.704-1.73.453-.419 1.107-.576 1.963-.576h4.73v1.258h-4.63c-.453 0-.805.105-1.056.315-.252.21-.353.471-.353.838v2.883l1.057-.733c.252-.158.453-.315.704-.367.202-.053.504-.105.856-.105h1.51c.804 0 1.458.21 1.86.681.454.472.655 1.101.655 1.94v5.661c0 .839-.201 1.52-.654 1.94-.453.472-1.057.681-1.862.681h-2.717c-.905.053-1.56-.157-2.063-.681m5.636-.891c.2-.263.352-.577.352-1.049v-5.609c0-.42-.1-.786-.352-.996-.252-.262-.554-.367-1.007-.367h-1.358c-.302 0-.503 0-.654.053-.151.052-.302.157-.554.314l-1.409.944v5.661c0 .42.101.786.353 1.049.251.262.603.367 1.006.367h2.566c.503 0 .855-.105 1.057-.367M114.77 9.74c.46-.476 1.179-.74 2.05-.74h2.36c.923 0 1.59.264 2.102.74.462.476.718 1.217.718 2.169v8.038h-1.436V11.75c0-.476-.102-.846-.359-1.058-.256-.264-.564-.37-1.077-.37h-2.256c-.462 0-.82.106-1.077.37-.257.265-.36.635-.36 1.058V20H114v-8.091c.051-.952.256-1.64.77-2.169M136.755 19.368c.258.21.568.316 1.084.316h2.374c.929 0 1.393-.42 1.393-1.21v-2.421c0-.474-.206-.948-.619-1.316l-1.703-1.58a5.452 5.452 0 0 1-.93-1.052c-.206-.316-.309-.737-.309-1.263V10h1.394v.737c0 .316.051.526.155.737.103.21.31.42.567.631l1.704 1.58c.412.368.722.736.877 1.052.155.316.258.684.258 1.158v2.526c0 .842-.258 1.474-.723 1.895-.464.42-1.187.684-2.116.684h-2.374c-.877 0-1.6-.21-2.064-.684-.465-.474-.723-1.105-.723-1.948V17h1.445v1.526c-.051.369.103.685.31.842M157.815 9.74c.459-.476 1.172-.74 2.039-.74h2.343c.918 0 1.58.264 2.09.74.458.476.713 1.217.713 2.169v8.038h-1.427V11.75c0-.476-.102-.846-.356-1.058-.255-.264-.56-.37-1.07-.37h-2.293c-.46 0-.816.106-1.07.37-.255.265-.357.635-.357 1.058V20H157v-8.091c.102-.952.306-1.64.815-2.169M175.3 10.683c.45.468.7 1.196.7 2.133v8.323c0 .936-.25 1.665-.7 2.133-.45.468-1.15.728-2.05.728h-2.75c-.8 0-1.45-.208-1.85-.676-.45-.468-.65-1.093-.65-1.925v-2.757h1.4v2.757c0 .468.1.78.35 1.04.25.26.55.365 1 .365h2.55c.45 0 .8-.105 1-.365.25-.26.35-.624.35-1.04v-8.74c0-.468-.1-.832-.35-1.04-.25-.26-.55-.364-1.05-.364h-2.45c-.45 0-.8.104-1.05.364s-.35.624-.35 1.04v2.133H168v-1.924c0-.937.25-1.613.7-2.133.45-.468 1.15-.728 2-.728h2.5c.95-.052 1.65.208 2.1.676M186.296 9.844c.452.469.704 1.198.704 2.135v5.156c0 .938-.252 1.667-.704 2.136-.453.469-1.158.729-2.063.729h-2.516c-.906 0-1.56-.26-2.013-.73-.452-.468-.704-1.197-.704-2.135V11.98c0-.937.252-1.614.704-2.135.453-.469 1.158-.73 2.013-.73h.805v-.833c0-.208-.05-.364-.1-.469a.968.968 0 0 0-.303-.364l-.905-.781c-.403-.365-.604-.73-.604-1.198V5h1.359v.365c0 .208.1.364.251.52l1.006.938c.403.417.604.833.604 1.302v1.042h.352c.956-.052 1.66.208 2.114.677zm-.705 1.979c0-.469-.1-.833-.352-1.042-.252-.26-.604-.364-1.057-.364h-2.415c-.453 0-.805.104-1.056.364-.252.26-.353.625-.353 1.042v5.52c0 .47.101.834.353 1.042.251.26.603.365 1.056.365h2.466c.453 0 .805-.104 1.006-.365.252-.26.352-.625.352-1.041v-5.521zM190.77 9.74c.46-.476 1.179-.74 2.05-.74h2.36c.923 0 1.59.264 2.102.74.462.476.718 1.217.718 2.169v8.038h-1.385V11.75c0-.476-.102-.846-.359-1.058-.256-.264-.564-.37-1.077-.37h-2.307c-.462 0-.82.106-1.077.37-.257.265-.36.635-.36 1.058V20H190v-8.091c.051-.952.308-1.64.77-2.169M65.668 31.688c.462-.476 1.079-.688 1.901-.688h1.182c.462 0 .874.053 1.182.159.308.105.616.317.873.581l.72.794.668-.74c.257-.318.565-.53.873-.635.308-.106.72-.159 1.182-.159h1.182c.822 0 1.49.212 1.901.688.462.475.668 1.11.668 2.01V42h-1.439v-8.303c0-.952-.462-1.375-1.336-1.375h-1.027c-.309 0-.566.053-.771.106-.206.106-.36.211-.514.423l-.72.793v5.712h-1.438v-5.712l-.72-.846a1.05 1.05 0 0 0-.513-.37c-.206-.053-.411-.106-.72-.106h-1.027c-.925 0-1.336.476-1.336 1.375V42H65v-8.303c0-.846.206-1.534.668-2.01M81.745 41.172c-.447-.465-.646-1.086-.646-1.913v-5.587c0-.827.2-1.5.646-1.913.448-.466 1.044-.673 1.839-.673h1.49c.348 0 .646.052.845.104.199.051.447.207.696.362l1.043.724v-3c0-.362-.099-.673-.347-.828-.249-.207-.597-.31-1.044-.31h-2.534c-.447 0-.795.103-1.044.31-.248.207-.347.466-.347.828v.827H81v-.672c0-.776.248-1.397.696-1.81.447-.414 1.143-.621 1.987-.621h2.584c.894 0 1.54.207 2.037.62.448.414.696 1.035.696 1.811v9.724c0 .931-.248 1.655-.696 2.12-.447.466-1.143.725-2.037.725h-2.733c-.745-.155-1.341-.362-1.789-.828m5.566-.93c.248-.26.347-.621.347-1.035V33.62l-1.39-.931c-.25-.156-.398-.259-.548-.31-.149-.052-.347-.052-.645-.052h-1.342c-.447 0-.745.103-.994.362-.248.258-.348.569-.348 1.034v5.586c0 .414.1.776.348 1.035.249.258.547.362.994.362h2.534c.497-.052.795-.207 1.044-.466M92.77 31.744c.46-.478 1.179-.744 2.05-.744h2.36c.923 0 1.59.266 2.102.744.462.478.718 1.222.718 2.179V42h-1.436v-8.29c0-.478-.102-.85-.359-1.063-.256-.265-.564-.372-1.026-.372h-2.307c-.462 0-.82.107-1.077.372-.257.266-.36.638-.36 1.063V42H92v-8.13c0-.904.256-1.648.77-2.126M114.815 31.744c.459-.478 1.172-.744 2.039-.744h2.343c.918 0 1.58.266 2.09.744.458.478.713 1.222.713 2.179V42h-1.427v-8.29c0-.478-.102-.85-.356-1.063-.255-.265-.56-.372-1.07-.372h-2.293c-.46 0-.816.107-1.07.372-.255.266-.357.638-.357 1.063V42H114v-8.13c.102-.904.357-1.648.815-2.126M110.8 35.224c.15.31.2.724.2 1.138v3.104c0 .827-.25 1.448-.7 1.862-.45.413-1.15.672-2.05.672h-2.5c-.9 0-1.55-.259-2.05-.724-.45-.466-.7-1.19-.7-2.12V27h1.4v12.31c0 .414.1.776.35 1.035.25.258.6.362 1 .362h2.5c.9 0 1.35-.414 1.35-1.19v-3.051c0-.363-.05-.673-.15-.88-.1-.207-.25-.465-.45-.724l-.95-1.086c-.35-.362-.6-.724-.75-1.086-.15-.362-.25-.724-.25-1.087v-.465h1.35v.517c0 .259.05.466.15.62l.3.466c.1.156.2.259.25.31l1.05 1.242c.3.259.5.62.65.931M208.8 13.224c.15.31.2.724.2 1.138v3.104c0 .827-.25 1.448-.7 1.862-.45.413-1.15.672-2.05.672h-2.5c-.9 0-1.55-.259-2.05-.724-.45-.466-.7-1.19-.7-2.12V5h1.4v12.31c0 .414.1.776.35 1.035.25.258.6.362 1 .362h2.5c.9 0 1.35-.414 1.35-1.19v-3.051c0-.363-.05-.673-.15-.88-.1-.207-.25-.465-.45-.724l-.95-1.086c-.35-.362-.6-.724-.75-1.086-.15-.362-.25-.724-.25-1.087v-.465h1.35v.414c0 .258.05.465.15.62l.3.466c.1.155.2.259.25.31l1.05 1.242c.3.362.5.672.65 1.034M126.755 40.413c.258.212.568.318 1.084.318h2.374c.929 0 1.393-.423 1.393-1.217v-2.432c0-.476-.206-.952-.619-1.322l-1.703-1.587a5.47 5.47 0 0 1-.93-1.058c-.206-.317-.309-.74-.309-1.269V31h1.394v.74c0 .318.051.53.155.74.103.212.31.424.567.635l1.704 1.587c.412.37.722.74.877 1.005.155.317.258.687.258 1.163v2.539c0 .846-.258 1.48-.723 1.904-.464.423-1.187.687-2.116.687h-2.374c-.877 0-1.6-.212-2.064-.688-.465-.475-.723-1.11-.723-1.956V37.98h1.445v1.533c-.051.37.052.688.31.9M61.9 17.836c.05.209.1.522.1.888v2.403c0 .94-.25 1.672-.7 2.142-.45.47-1.15.731-2.05.731H56.5c-.8 0-1.45-.209-1.85-.68-.45-.47-.65-1.096-.65-1.932v-2.35h1.35v2.35c0 .47.1.784.35 1.045.25.261.55.366 1 .366h2.55c.45 0 .8-.105 1-.366.25-.261.35-.627.35-1.045v-2.612c0-.313 0-.522-.05-.679-.05-.157-.15-.313-.3-.575l-1-1.567h-2.7V14.65h2.4c.45 0 .8-.104 1.05-.365.25-.262.35-.575.35-1.045V10h1.35v3.291c0 .47-.1.94-.3 1.306-.2.418-.5.731-.9.94l1 1.567c.25.262.35.523.4.732M131.9 17.836c.05.209.1.522.1.888v2.403c0 .94-.25 1.672-.7 2.142-.45.47-1.15.731-2.05.731h-2.75c-.8 0-1.45-.209-1.85-.68-.45-.47-.65-1.096-.65-1.932v-2.35h1.35v2.35c0 .47.1.784.35 1.045.25.261.55.366 1 .366h2.55c.45 0 .8-.105 1-.366.25-.261.35-.627.35-1.045v-2.612c0-.313 0-.522-.05-.679-.05-.157-.15-.313-.3-.575l-1-1.567h-2.7V14.65h2.4c.45 0 .8-.104 1.05-.365.25-.262.35-.575.35-1.045V10h1.35v3.291c0 .47-.1.94-.3 1.306-.2.418-.5.731-.9.94l1 1.567c.25.262.35.523.4.732M61.9 38.836c.05.209.1.522.1.888v2.403c0 .94-.25 1.672-.7 2.142-.45.47-1.15.731-2.05.731H56.5c-.8 0-1.45-.209-1.85-.68-.45-.47-.65-1.096-.65-1.932v-2.35h1.35v2.35c0 .47.1.784.35 1.045.25.261.55.366 1 .366h2.55c.45 0 .8-.105 1-.366.25-.261.35-.627.35-1.045v-2.612c0-.313 0-.522-.05-.679-.05-.157-.15-.313-.3-.575l-1-1.567h-2.7V35.65h2.4c.45 0 .8-.104 1.05-.365.25-.262.35-.575.35-1.045V31h1.35v3.291c0 .47-.1.94-.3 1.306-.2.418-.5.731-.9.94l1 1.567c.2.262.3.523.4.732M153.893 17.865c.053.21.107.525.107.892v2.726c0 .84-.268 1.468-.75 1.888-.482.42-1.232.629-2.196.629h-3.108c-.964 0-1.66-.262-2.196-.734-.482-.472-.75-1.206-.75-2.15V10h1.5v11.378c0 .42.107.787.375 1.049.268.262.643.367 1.071.367h3.108c.964 0 1.446-.42 1.446-1.206v-2.884c0-.314 0-.524-.054-.682-.053-.157-.16-.314-.321-.576l-1.071-1.573h-2.197v-1.206h1.875c.482 0 .857-.105 1.125-.367.268-.263.375-.577.375-1.05V10h1.447v3.303c0 .472-.108.944-.322 1.311a2.08 2.08 0 0 1-.964.944l1.071 1.573c.215.262.322.524.429.734"
                ></path>
                <path
                  fill="#993DBB"
                  d="M16.265 31.656V19.292c0-3.847 3.983-4.617 5.735-3.385-1.062-2.77-4.726-4.72-5.681-4.874-1.646-.257-3.983 1.026-5.098 2.616C10.32 14.932 10 16.522 10 19.498v12.004c0 2.976.319 4.566 1.221 5.849 1.115 1.59 3.452 2.873 5.098 2.616.955-.154 4.62-2.103 5.681-4.874-1.752 1.232-5.735.462-5.735-3.437"
                ></path>
                <path
                  fill="#993DBB"
                  d="M7.298 37.986c-.833-1.437-1.176-3.233-1.176-6.005V17.968c0-2.823.343-4.62 1.176-6.006.98-1.642 2.645-3.13 4.702-3.388-3.33-1.283-6.71-.308-9.306 1.848C.98 12.322 0 14.888 0 17.506v14.937c0 2.669.98 5.184 2.694 7.135C5.24 41.734 8.62 42.708 12 41.426c-2.057-.308-3.722-1.746-4.702-3.44"
                ></path>
                <path
                  fill="#70D44B"
                  d="M23.37 4.206C27.082 7.216 36.01 14.484 41.528 19c2.157-2.492 2.056-6.23-1.054-8.773-2.457-2.076-9.33-7.63-9.33-7.63-3.71-3.063-8.576-3.426-12.84-1.038-.3.155-1.304.726-1.304.726 1.003-.155 2.057-.103 3.26.26.953.208 2.308 1.038 3.11 1.661M20.949 7.341c-.978-.706-2.726-1.968-4.938-2.27-2.314-.303-4.525.403-6.48 1.412L6.034 8.35A10.676 10.676 0 0 0 3 10.671c4.526-3.532 10.029-1.514 13.269.908.977.757 3.137 2.372 5.862 4.39h.052C25.68 18.592 33.909 25 33.909 25c1.8-1.312 3.497-2.624 5.091-3.834-5.709-4.34-14.4-11.05-18.051-13.825"
                ></path>
                <path
                  fill="#00B2E3"
                  d="M23.37 45.783C27.082 42.763 36.01 35.476 41.528 31c2.157 2.498 2.056 6.246-1.054 8.797-2.457 2.03-9.33 7.6-9.33 7.6-3.71 3.07-8.576 3.434-12.84 1.04-.3-.156-1.304-.729-1.304-.729 1.003.157 2.057.105 3.26-.26.953-.26 2.308-1.04 3.11-1.665M20.949 42.659c-.978.706-2.675 1.968-4.938 2.27-2.314.303-4.525-.403-6.48-1.412L6.034 41.65A10.676 10.676 0 0 1 3 39.329c4.526 3.532 10.029 1.514 13.269-.908.977-.757 3.137-2.372 5.862-4.39h.052C25.68 31.408 33.909 25 33.909 25c1.8 1.312 3.497 2.624 5.091 3.834-5.709 4.34-14.4 11.05-18.051 13.825"
                ></path>
              </g>
            </svg>
          </a>
          <a href="#" className="share">
            Share
            <svg
              data-v-7934efce=""
              version="1.1"
              viewBox="0 0 16 20"
              className="svg-icon svg-fill"
            >
              <path
                pid="0"
                _fill="#24272A"
                fillRule="evenodd"
                d="M10.992 15.745c.165-.311.082-.72-.184-.91l-5.02-3.618c-.266-.193-.616-.096-.78.215-.165.311-.082.719.184.91l5.02 3.618a.507.507 0 00.297.099c.19 0 .376-.112.483-.314M5.514 8.647a.552.552 0 00.328-.11l4.972-3.643a.689.689 0 00.163-.9c-.181-.298-.548-.378-.82-.179L5.186 7.46a.689.689 0 00-.163.9.578.578 0 00.491.288m8.024-3.706A2.469 2.469 0 0016 2.471 2.469 2.469 0 0013.538 0a2.469 2.469 0 00-2.461 2.47 2.469 2.469 0 002.461 2.471m0 10.118a2.469 2.469 0 00-2.461 2.47A2.469 2.469 0 0013.538 20 2.469 2.469 0 0016 17.53a2.469 2.469 0 00-2.462-2.471M2.462 7.412A2.469 2.469 0 000 9.882a2.469 2.469 0 002.462 2.47 2.469 2.469 0 002.461-2.47 2.469 2.469 0 00-2.461-2.47"
              ></path>
            </svg>
          </a>
        </div>
        <div className="bottom">
          <ul>
            {footerMenu.map((e, index) => {
              return <Nav key={index} title={e.title} path={e.path} />;
            })}
          </ul>
          <a href="#">
            Leavingstone
            <svg
              data-v-58269112=""
              version="1.1"
              viewBox="0 0 41 11"
              className="svg-icon svg-fill"
            >
              <path
                pid="0"
                fillRule="evenodd"
                d="M41 .651s-9.752-2.975-18.765 3.792c0 0 1.31 1.317.109 3.055C14.177-2.324 0 .888 0 .888S11.91 1.178 21.743 11C28.243 1.23 41 .651 41 .651z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

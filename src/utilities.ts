export interface Project {
  img: string;
  title: string;
  description: string;
  url: string;
}

const debug = true;

export async function getReadMe(user: string, repo: string) {
  let url = `https://raw.githubusercontent.com/${user}/${repo}/`;
  let readMe = "";
  const possibleBranches = ["main", "master"];
  for (const branch of possibleBranches) {
    try {
      const res = await fetch(`${url}${branch}/README.md`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      readMe = await res.text();
      url = `${url}${branch}/`;
      break;
    } catch (e) {
      if (debug) console.log(`Error on fetching README for ${url}${branch}:\n`, e);
    }
  }

  if (debug) console.log(readMe);
  return { readMe, url };
}

export function parseReadMe(props: { readMe: string; url: string }): Project {
  const _toReturn = {
    img: "/images/keyboard.jpg",
    title: "Title here",
    description: "Description here",
    url: "",
  };

  // Parse title
  if (debug) console.log("Parse title");
  const titleRegex = new RegExp(/(?:^##?\s)([\s\S]*?)(?:(\s!\[.*?)?(\n))/);
  if (titleRegex.test(props.readMe)) {
    const res = titleRegex.exec(props.readMe);
    if (res) {
      _toReturn.title = res[1];
    }
  }
  if (debug) console.log(titleRegex.test(props.readMe));

  // Parse description
  if (debug) console.log("Parse description");
  const descriptionRegex = new RegExp(/(?:^(?:\n|\r))*(^[^#][\s\S]*?)(?:(\n|\r))/m);
  if (descriptionRegex.test(props.readMe)) {
    const res = descriptionRegex.exec(props.readMe);
    if (res) {
      _toReturn.description = res[1];
    }
    if (_toReturn.description.length > 320) {
      const previousPeriod = _toReturn.description.lastIndexOf(".", _toReturn.description.length - 2);
      _toReturn.description = _toReturn.description.slice(0, previousPeriod + 1);
    }
  }
  if (debug) console.log(descriptionRegex.test(props.readMe));

  // Parse image
  if (debug) console.log("Parse image");

  // Parse markdown image ![name](url)
  const imageMarkdownRegex = new RegExp(/(?:^\![\s\S]+?\()(.*?)(?:\))/m);
  // Parse HTML image <img src="url"/>
  const imageHTMLRegex = new RegExp(/(?:^<img[\s\S]+?src=")(.*?)(?:"[\s\S]*?\/>)/m);

  if (imageMarkdownRegex.test(props.readMe) || imageHTMLRegex.test(props.readMe)) {
    const resMarkdown = imageMarkdownRegex.exec(props.readMe);
    const resHTML = imageHTMLRegex.exec(props.readMe);
    if (debug) console.log(resMarkdown);
    if (debug) console.log(resHTML);
    if (resMarkdown || resHTML) {
      // @ts-ignore
      _toReturn.img = resMarkdown ? resMarkdown[1] : resHTML[1];
    }

    if (!_toReturn.img.startsWith("http")) {
      _toReturn.img = `${props.url}${_toReturn.img}`;
    }
  }
  if (debug) console.log(imageMarkdownRegex.test(props.readMe), imageHTMLRegex.test(props.readMe));

  if (debug) console.log(_toReturn);
  return _toReturn;
}

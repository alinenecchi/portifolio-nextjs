export const getWordBetweenTwoCharacters = (link, start, end) => {
  return link.split(start).pop().split(end)[0].trim();
};

export const getYoutubeEmbedLink = (link) => {
  const startReg = new RegExp(`/?v=|youtu.be/|embed/`, 'gi');
  const endReg = new RegExp(/\?|&/, 'gi');
  const embedLink = getWordBetweenTwoCharacters(link, startReg, endReg);

  if(embedLink && embedLink.length >= 11) {
    return `https://www.youtube.com/embed/${embedLink}?showinfo=0&rel=0`;
  } else {
    return null;
  }
};

export const removeTagsHTML = (str) => str.replace(/<[^>]*>?/gm, '').trim();

export const scrollIntoViewOptions = {
  behavior: "smooth",
  block: "nearest",
  inline: "nearest"
};
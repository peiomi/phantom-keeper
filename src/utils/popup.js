let showPopup = null;

export const registerPopup = (fn) => {
  showPopup = fn;
};

export const triggerPopup = (data) => {
  if (showPopup) {
    showPopup(data);
  }
};

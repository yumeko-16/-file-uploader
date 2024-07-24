export const fileUploader = () => {
  const input = document.getElementById('input');

  input.addEventListener('change', (e) => {
    let files = input.files;

    if (files.length > 0) {
      console.log(files);
    } else {
      console.log('選択されていません');
    }
  });
};

export const files = {
  flutter: [
    {
      path: "",
      templates: [
        // Layout files
        {
          file: "main.dart.ejs",
          method: "template",
          renameTo: (data) => `src/main.dart`,
        },
      ],
    },
  ],
};

export const entityfiles = {
  flutter: [
    {
      path: "entities",
      templates: [
        // Layout files
        {
          file: "entityfileName.dart.ejs",
          method: "template",
          renameTo: (data) => `src/entities/${data.name}.dart`,
        },
      ],
    },
  ],
};

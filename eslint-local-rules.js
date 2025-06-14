module.exports = {
  'lowercase-comments': {
    create(context) {
      return {
        Program() {
          const sourceCode = context.getSourceCode();
          sourceCode.getAllComments().forEach((comment) => {
            const commentText = comment.value.trim();

            if (commentText && commentText !== commentText.toLowerCase()) {
              context.report({
                loc: comment.loc,
                message: 'Comments must be all lowercase.'
              });
            }
          });
        }
      };
    }
  },
  'alphabetize-import-specifiers': {
    create(context) {
      return {
        ImportDeclaration(node) {
          // only check named imports (import { ... } from ...)
          const namedSpecifiers = node.specifiers.filter(
            (s) => s.type === 'ImportSpecifier'
          );
          if (namedSpecifiers.length < 2) return;

          const importedNames = namedSpecifiers.map((s) => s.imported.name);
          const sortedNames = [...importedNames].sort((a, b) =>
            a.localeCompare(b)
          );

          // if already sorted, do nothing
          if (importedNames.every((name, i) => name === sortedNames[i])) {
            return;
          }

          context.report({
            node,
            message: 'Named imports should be alphabetized.',
            fix(fixer) {
              // replace the import specifiers with the sorted ones
              const sourceCode = context.getSourceCode();
              const importStart = namedSpecifiers[0].range[0];
              const importEnd =
                namedSpecifiers[namedSpecifiers.length - 1].range[1];

              // get the full text of the import specifiers
              const sortedSpecifiers = [...namedSpecifiers]
                .sort((a, b) => a.imported.name.localeCompare(b.imported.name))
                .map((s) => sourceCode.getText(s))
                .join(', ');

              return fixer.replaceTextRange(
                [importStart, importEnd],
                sortedSpecifiers
              );
            }
          });
        }
      };
    }
  }
};

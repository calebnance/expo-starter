module.exports = {
  rules: {
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
    }
  }
};

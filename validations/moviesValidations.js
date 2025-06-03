export const validateRequiredFields = (newMovie) => {
    const { title, description, year, rating } = newMovie;
    const errors = [];

    if (!title || typeof title !== 'string' || title.trim() === '') {
        errors.push('Title is required and must be a non-empty string.');
    }

    if (!description || typeof description !== 'string' || description.trim() === '') {
        errors.push('Description is required and must be a non-empty string.');
    }

    if (!year || typeof year !== 'number' || year < 0 || year > new Date().getFullYear()) {
        errors.push('Year is required and must be a valid year.');
    }

    if (!rating || typeof rating !== 'number' || rating < 0 || rating > 10) {
        errors.push('Rating is required and must be a number between 0 and 10.');
    }
}
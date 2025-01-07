

const TryCatch = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            res.status(501).json({
                message: error.message,
            });
        }
    };
};

export default TryCatch;

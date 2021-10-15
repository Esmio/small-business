const _20200709070457_Comment = require("./20200709070457-Comment")
// @ponicode
describe("_20200709070457_Comment.up", () => {
    test("0", async () => {
        await _20200709070457_Comment.up({ bulkInsert: () => "c466a48309794261b64a4f02cfcc3d64" }, "mongo")
    })

    test("1", async () => {
        await _20200709070457_Comment.up({ bulkInsert: () => 9876 }, "sqlite")
    })

    test("2", async () => {
        await _20200709070457_Comment.up({ bulkInsert: () => 12345 }, "mysql")
    })

    test("3", async () => {
        await _20200709070457_Comment.up({ bulkInsert: () => "c466a48309794261b64a4f02cfcc3d64" }, "mysql")
    })

    test("4", async () => {
        await _20200709070457_Comment.up({ bulkInsert: () => "da7588892" }, "mysql")
    })

    test("5", async () => {
        await _20200709070457_Comment.up(undefined, undefined)
    })
})

// @ponicode
describe("_20200709070457_Comment.down", () => {
    test("0", async () => {
        await _20200709070457_Comment.down({ bulkDelete: () => true }, "mysql")
    })

    test("1", async () => {
        await _20200709070457_Comment.down({ bulkDelete: () => false }, "sqlite")
    })

    test("2", async () => {
        await _20200709070457_Comment.down({ bulkDelete: () => false }, "mongo")
    })

    test("3", async () => {
        await _20200709070457_Comment.down({ bulkDelete: () => true }, "mongo")
    })

    test("4", async () => {
        await _20200709070457_Comment.down({ bulkDelete: () => true }, "postgres")
    })

    test("5", async () => {
        await _20200709070457_Comment.down(undefined, undefined)
    })
})

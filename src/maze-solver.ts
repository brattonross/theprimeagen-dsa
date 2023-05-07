export type Point = {
    x: number;
    y: number;
};

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: Array<string>,
    wall: string,
    curr: Point,
    end: Point,
    seen: Array<Array<boolean>>,
    path: Array<Point>
): boolean {
    // Base case: if we are off of the map
    if (
        curr.x < 1 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // if we are on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // if we are at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // if we've already checked this position
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // add this point to the path, if it ends up not being part of the solution,
    // then we'll pop it off after we've done the recursive call.
    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < dir.length; i++) {
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + dir[i][0],
                    y: curr.y + dir[i][1],
                },
                end,
                seen,
                path
            )
        ) {
            return true;
        }
    }

    path.pop();
    return false;
}

export function solveMaze(
    maze: Array<string>,
    wall: string,
    start: Point,
    end: Point
): Array<Point> {
    const seen: Array<Array<boolean>> = [];
    const path: Array<Point> = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

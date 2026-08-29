declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.gltf' {
  const content: string;
  export default content;
}

declare module '@react-three/drei' {
  export * from '@react-three/drei';
}
